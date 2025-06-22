# Docker / Compose

## 1. System Requirements

To set up the Seatsurfing backend on your server, the following system requirements must be met:

- Linux server
- Docker runtime environment (or CRI/containerd in case of Kubernetes, tested with Docker Engine version 28.x and Podman version 1.4.x)
- PostgreSQL (tested with PostgreSQL version 16.x and 17.x)
- Optionally: Docker Compose (tested with Docker Compose version 2.x)
- Recommended: Reverse proxy with TLS termination (tested with Traefik version 2.x)

## 2. Setting up the container

The following example demonstrates setting up Seatsurfing backend using Docker Compose. We'll start the required PostgreSQL database as part of the compose file.

For simplicity and demonstration purposes only, container port 8080 is published directly on the host. When using Seatsurfing in production, you should place a reverse proxy in front of the Seatsurfing backend which also takes care of TLS termination.

#### docker-compose.yml

```
services:
  server:
    image: seatsurfing/backend
    restart: always
    networks:
      sql:
    ports:
      - 8080:8080
    environment:
      POSTGRES_URL: 'postgres://seatsurfing:DB_PASSWORD@db/seatsurfing?sslmode=disable'
  db:
    image: postgres:17
    restart: always
    networks:
      sql:
    volumes:
      - db:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: DB_PASSWORD
      POSTGRES_USER: seatsurfing
      POSTGRES_DB: seatsurfing

volumes:
  db:

networks:
  sql:
```

This starts...

- a PostgreSQL database with data stored on Docker volume "db"
- a Seatsurfing Backend instance with port 8080 exposed.
- a Seatsurfing Booking UI instance which is accessible through the Backend instance at: :8080/ui/
- a Seatsurfing Admin UI instance which is accessible through the Backend instance at: :8080/admin/

Start the Seatsurfing backend by running: `docker compose up -d`

Afterwards, Seatsurfing can be accessed at: [http://localhost:8080](http://localhost:8080)

## 3. Initial configuration

Access the administrator web-interface using a modern web browser (i.e. Chrome, Firefox, Safari) at: [http://localhost:8080/admin/](http://localhost:8080/admin/)

By default, an organization with one administrator account is created on backend startup if no organization already exists in the specified database. If not defined otherwise, use `admin@seatsurfing.local` as the username and `12345678` as the password.

The administrator interface can be used to manage room plans, users and settings. Read more about it in the [Administration](admin-ui.md) section.

## 4. Use the web app to book spaces

Let your coworkers use the progressive web app (PWA) to book spaces using their mobile devices or desktop computers:

[http://localhost:8080/ui/](http://localhost:8080/ui/)
