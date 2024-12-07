"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[7705],{403:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"kubernetes","title":"Kubernetes","description":"1. System Requirements","source":"@site/docs/kubernetes.md","sourceDirName":".","slug":"/kubernetes","permalink":"/docs/kubernetes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Docker / Compose","permalink":"/docs/docker"},"next":{"title":"Configuration","permalink":"/docs/config"}}');var a=s(4848),r=s(8453);const i={},o="Kubernetes",d={},c=[{value:"1. System Requirements",id:"1-system-requirements",level:2},{value:"2. Create database secret",id:"2-create-database-secret",level:2},{value:"3. Create database deployment",id:"3-create-database-deployment",level:2},{value:"4. Create Seatsurfing deployment and ingress",id:"4-create-seatsurfing-deployment-and-ingress",level:2},{value:"5. Initial configration",id:"5-initial-configration",level:2},{value:"6. Use the web app to book spaces",id:"6-use-the-web-app-to-book-spaces",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"kubernetes",children:"Kubernetes"})}),"\n",(0,a.jsx)(n.h2,{id:"1-system-requirements",children:"1. System Requirements"}),"\n",(0,a.jsx)(n.p,{children:"To set up the Seatsurfing backend on Kubernetes, the following system requirements must be met:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Linux server(s)"}),"\n",(0,a.jsx)(n.li,{children:"Kubernetes cluster with at least one worker node (tested with Kubernetes 1.22 and containerd version 1.5.x)"}),"\n",(0,a.jsx)(n.li,{children:"Persistent storage for Postgres database (tested with Longhorn 1.2.x)"}),"\n",(0,a.jsx)(n.li,{children:"Recommended: Reverse proxy with TLS termination (tested with nginx in front of Kubernetes' Traefik ingress)"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"2-create-database-secret",children:"2. Create database secret"}),"\n",(0,a.jsxs)(n.p,{children:["Create a secret for your database password using ",(0,a.jsx)(n.code,{children:"kubectl"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"kubectl create secret generic seatsurfing-db \\\n  --from-literal=db-password='DB_PASSWORD'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"DB_PASSWORD"})," with a secure password."]}),"\n",(0,a.jsx)(n.h2,{id:"3-create-database-deployment",children:"3. Create database deployment"}),"\n",(0,a.jsx)(n.p,{children:"Next, we'll create the necessary configurations and deployment for the Postgres database. This configuration contains:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A persistent volume claim which contains the database files (adjust as needed)"}),"\n",(0,a.jsx)(n.li,{children:"A deployment of Postgres version 13, inluding some adjustments to make sure Postgres runs well on Kubernetes"}),"\n",(0,a.jsx)(n.li,{children:"A service which exposes TCP port 5432 of our Postgres database server"}),"\n",(0,a.jsx)(n.li,{children:"A network policy which ensures that only our Seatsurfing backend is able to connect to the Postgres database service"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Create a file ",(0,a.jsx)(n.code,{children:"seatsurfing-db.yaml"})," with the following contents (modify as needed):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'kind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: seatsurfing-db\nspec:\n  storageClassName: longhorn\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1G\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seatsurfing-db\nspec:\n  replicas: 1\n  strategy:\n    type: Recreate\n  selector:\n    matchLabels:\n      app: seatsurfing-db\n  template:\n    metadata:\n      labels:\n        app: seatsurfing-db\n    spec:\n      securityContext:\n        fsGroup: 999\n      volumes:\n      - name: db\n        persistentVolumeClaim:\n          claimName: seatsurfing-db\n      initContainers:\n      - image: alpine:latest\n        name: init\n        command: ["sh", "-c", "chown 999:999 /var/lib/postgresql/data"]\n        volumeMounts:\n        - mountPath: "/var/lib/postgresql/data"\n          name: db\n          readOnly: false\n          subPath: postgres\n      containers:\n      - image: postgres:13\n        name: db\n        imagePullPolicy: Always\n        ports:\n        - name: port-postgres\n          containerPort: 5432\n        env:\n        - name: POSTGRES_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: seatsurfing-db\n              key: db-password\n        - name: POSTGRES_USER\n          value: "seatsurfing"\n        - name: POSTGRES_DB\n          value: "seatsurfing"\n        volumeMounts:\n        - mountPath: "/var/lib/postgresql/data"\n          name: db\n          readOnly: false\n          subPath: postgres\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: seatsurfing-db\nspec:\n  ports:\n    - port: 5432\n      protocol: TCP\n      targetPort: 5432\n  selector:\n    app: seatsurfing-db\n  type: ClusterIP\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: seatsurfing-db\nspec:\n  podSelector:\n    matchLabels:\n      app: seatsurfing-db\n  policyTypes:\n  - Ingress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          app: seatsurfing-backend\n'})}),"\n",(0,a.jsx)(n.p,{children:"Apply the file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"kubectl apply -f seatsurfing-db.yaml\n"})}),"\n",(0,a.jsx)(n.h2,{id:"4-create-seatsurfing-deployment-and-ingress",children:"4. Create Seatsurfing deployment and ingress"}),"\n",(0,a.jsx)(n.p,{children:"Now we're ready to create the configurations and the deployment of our actual Seatsurfing containers (backend, admin-ui, booking-ui). This includes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A deployment of the Seatsurfing REST API backend, which connects to the previously deployed Postgres database server"}),"\n",(0,a.jsx)(n.li,{children:"A deployment of the Seatsurfing Admin Web Interface (admin-ui), which is not directly accessible, but incoming requests are forwarded to it via the backend"}),"\n",(0,a.jsx)(n.li,{children:"A deployment of the Seatsurfing Booking Web Interface (booking-ui), which is not directly accessible, but incoming requests are forwarded to it via the backend"}),"\n",(0,a.jsx)(n.li,{children:"A service which exposes port 80 of the Seatsurfing backend"}),"\n",(0,a.jsxs)(n.li,{children:["An ingress which makes the Seatsurfing backend available at host ",(0,a.jsx)(n.code,{children:"seatsurfing.your-domain.com"})," (you'll need to change that) using Traefik"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Please note: We're making the backend available insecurely via HTTP here. This example assumes you're having a reverse proxy performing TLS termination in front of your Kubernetes cluster. If this is not the case, you should really consider changing port 80 to 443 and add HTTPS encryption to the example."}),"\n",(0,a.jsxs)(n.p,{children:["Create a file ",(0,a.jsx)(n.code,{children:"seatsurfing-backend.yaml"})," with the following contents (modify as needed):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seatsurfing-backend\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: seatsurfing-backend\n  template:\n    metadata:\n      labels:\n        app: seatsurfing-backend\n    spec:\n      containers:\n      - image: seatsurfing/backend:latest\n        name: server\n        imagePullPolicy: Always\n        ports:\n        - name: port-http\n          containerPort: 8080\n        env:\n        - name: POSTGRES_PASS\n          valueFrom:\n            secretKeyRef:\n              name: seatsurfing-db\n              key: db-password\n        - name: POSTGRES_URL\n          value: "postgres://seatsurfing:$(POSTGRES_PASS)@seatsurfing-db/seatsurfing?sslmode=disable"\n        - name: JWT_SIGNING_KEY\n          value: "a_random_key"\n        - name: PUBLIC_URL\n          value: "https://seatsurfing.your-domain.com" \n        - name: FRONTEND_URL\n          value: "https://seatsurfing.your-domain.com"\n      - image: seatsurfing/booking-ui:latest\n        name: booking-ui\n        imagePullPolicy: Always\n        env:\n        - name: FRONTEND_URL\n          value: "https://seatsurfing.your-domain.com"\n      - image: seatsurfing/admin-ui:latest\n        name: admin-ui\n        imagePullPolicy: Always\n        env:\n        - name: FRONTEND_URL\n          value: "https://seatsurfing.your-domain.com"\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: seatsurfing-backend\nspec:\n  ports:\n    - port: 80\n      protocol: TCP\n      targetPort: 8080\n  selector:\n    app: seatsurfing-backend\n  type: ClusterIP\n---\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: seatsurfing-backend\nspec:\n  entryPoints:\n    - web\n  routes:\n  - match: Host(`seatsurfing.your-domain.com`)\n    kind: Rule\n    services:\n    - name: seatsurfing-backend\n      port: 80\n'})}),"\n",(0,a.jsx)(n.p,{children:"Apply the file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"kubectl apply -f seatsurfing-backend.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure ",(0,a.jsx)(n.code,{children:"seatsurfing-db"})," and ",(0,a.jsx)(n.code,{children:"seatsurfing-backend"}),'and "Running":']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"kubectl get pods | grep seatsurfing\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Afterwards, Seatsurfing can be accessed at the specified host (i.e. ",(0,a.jsx)(n.a,{href:"https://seatsurfing.your-domain.com",children:"https://seatsurfing.your-domain.com"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"5-initial-configration",children:"5. Initial configration"}),"\n",(0,a.jsx)(n.p,{children:"Access the administrator web-interface using a modern web browser (i.e. Chrome, Firefox, Safari) at: /admin/"}),"\n",(0,a.jsxs)(n.p,{children:["By default, an organisation with one administrator account is created on backend startup if no organisation already exists in the specified database. If not defined otherwise, use ",(0,a.jsx)(n.code,{children:"admin@seatsurfing.local"})," as the username and ",(0,a.jsx)(n.code,{children:"12345678"})," as the password."]}),"\n",(0,a.jsxs)(n.p,{children:["The administrator interface can be used to manage room plans, users and settings. Read more about it in the ",(0,a.jsx)(n.a,{href:"/docs/admin-ui",children:"Administration"})," section."]}),"\n",(0,a.jsx)(n.h2,{id:"6-use-the-web-app-to-book-spaces",children:"6. Use the web app to book spaces"}),"\n",(0,a.jsx)(n.p,{children:"Let your coworkers use the progressive web app (PWA) to book spaces using their mobile devices or desktop computers:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://localhost:8080/ui/",children:"http://localhost:8080/ui/"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(6540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);