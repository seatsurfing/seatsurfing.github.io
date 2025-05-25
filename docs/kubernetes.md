# Kubernetes

## 1. System Requirements
To set up the Seatsurfing backend on Kubernetes, the following system requirements must be met:

* Linux server(s)
* Kubernetes cluster with at least one worker node (tested with Kubernetes 1.22 and containerd version 1.5.x)
* Persistent storage for Postgres database (tested with Longhorn 1.2.x)
* Recommended: Reverse proxy with TLS termination (tested with nginx in front of Kubernetes' Traefik ingress)

## 2. Create database secret
Create a secret for your database password using ```kubectl```:

```
kubectl create secret generic seatsurfing-db \
  --from-literal=db-password='DB_PASSWORD'
```

Make sure to replace ```DB_PASSWORD``` with a secure password.

## 3. Create database deployment
Next, we'll create the necessary configurations and deployment for the Postgres database. This configuration contains:

* A persistent volume claim which contains the database files (adjust as needed)
* A deployment of Postgres version 13, inluding some adjustments to make sure Postgres runs well on Kubernetes
* A service which exposes TCP port 5432 of our Postgres database server
* A network policy which ensures that only our Seatsurfing backend is able to connect to the Postgres database service

Create a file ```seatsurfing-db.yaml``` with the following contents (modify as needed):

```
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: seatsurfing-db
spec:
  storageClassName: longhorn
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1G
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: seatsurfing-db
spec:
  replicas: 1
  strategy:
    type: Recreate
  selector:
    matchLabels:
      app: seatsurfing-db
  template:
    metadata:
      labels:
        app: seatsurfing-db
    spec:
      securityContext:
        fsGroup: 999
      volumes:
      - name: db
        persistentVolumeClaim:
          claimName: seatsurfing-db
      initContainers:
      - image: alpine:latest
        name: init
        command: ["sh", "-c", "chown 999:999 /var/lib/postgresql/data"]
        volumeMounts:
        - mountPath: "/var/lib/postgresql/data"
          name: db
          readOnly: false
          subPath: postgres
      containers:
      - image: postgres:17
        name: db
        imagePullPolicy: Always
        ports:
        - name: port-postgres
          containerPort: 5432
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: seatsurfing-db
              key: db-password
        - name: POSTGRES_USER
          value: "seatsurfing"
        - name: POSTGRES_DB
          value: "seatsurfing"
        volumeMounts:
        - mountPath: "/var/lib/postgresql/data"
          name: db
          readOnly: false
          subPath: postgres
---
apiVersion: v1
kind: Service
metadata:
  name: seatsurfing-db
spec:
  ports:
    - port: 5432
      protocol: TCP
      targetPort: 5432
  selector:
    app: seatsurfing-db
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: seatsurfing-db
spec:
  podSelector:
    matchLabels:
      app: seatsurfing-db
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: seatsurfing-backend
```

Apply the file:

```
kubectl apply -f seatsurfing-db.yaml
```

## 4. Create Seatsurfing deployment and ingress
Now we're ready to create the configurations and the deployment of our actual Seatsurfing containers (backend, admin-ui, booking-ui). This includes:

* A deployment of the Seatsurfing REST API backend, which connects to the previously deployed Postgres database server
* A deployment of the Seatsurfing Admin Web Interface (admin-ui), which is not directly accessible, but incoming requests are forwarded to it via the backend
* A deployment of the Seatsurfing Booking Web Interface (booking-ui), which is not directly accessible, but incoming requests are forwarded to it via the backend
* A service which exposes port 80 of the Seatsurfing backend
* An ingress which makes the Seatsurfing backend available at host ```seatsurfing.your-domain.com``` (you'll need to change that) using Traefik

Please note: We're making the backend available insecurely via HTTP here. This example assumes you're having a reverse proxy performing TLS termination in front of your Kubernetes cluster. If this is not the case, you should really consider changing port 80 to 443 and add HTTPS encryption to the example.

Create a file ```seatsurfing-backend.yaml``` with the following contents (modify as needed):

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: seatsurfing-backend
spec:
  replicas: 1
  selector:
    matchLabels:
      app: seatsurfing-backend
  template:
    metadata:
      labels:
        app: seatsurfing-backend
    spec:
      containers:
      - image: seatsurfing/backend:latest
        name: server
        imagePullPolicy: Always
        ports:
        - name: port-http
          containerPort: 8080
        env:
        - name: POSTGRES_PASS
          valueFrom:
            secretKeyRef:
              name: seatsurfing-db
              key: db-password
        - name: POSTGRES_URL
          value: "postgres://seatsurfing:$(POSTGRES_PASS)@seatsurfing-db/seatsurfing?sslmode=disable"
      - image: seatsurfing/booking-ui:latest
        name: booking-ui
        imagePullPolicy: Always
      - image: seatsurfing/admin-ui:latest
        name: admin-ui
        imagePullPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: seatsurfing-backend
spec:
  ports:
    - port: 80
      protocol: TCP
      targetPort: 8080
  selector:
    app: seatsurfing-backend
  type: ClusterIP
---
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: seatsurfing-backend
spec:
  entryPoints:
    - web
  routes:
  - match: Host(`seatsurfing.your-domain.com`)
    kind: Rule
    services:
    - name: seatsurfing-backend
      port: 80
```

Apply the file:

```
kubectl apply -f seatsurfing-backend.yaml
```

Make sure ```seatsurfing-db``` and ```seatsurfing-backend```and "Running":

```
kubectl get pods | grep seatsurfing
```

Afterwards, Seatsurfing can be accessed at the specified host (i.e. https://seatsurfing.your-domain.com).

## 5. Initial configuration
Access the administrator web-interface using a modern web browser (i.e. Chrome, Firefox, Safari) at: /admin/

By default, an organisation with one administrator account is created on backend startup if no organisation already exists in the specified database. If not defined otherwise, use ```admin@seatsurfing.local``` as the username and ```12345678``` as the password.

The administrator interface can be used to manage room plans, users and settings. Read more about it in the [Administration](admin-ui.md) section.

## 6. Use the web app to book spaces
Let your coworkers use the progressive web app (PWA) to book spaces using their mobile devices or desktop computers:

[http://localhost:8080/ui/](http://localhost:8080/ui/)