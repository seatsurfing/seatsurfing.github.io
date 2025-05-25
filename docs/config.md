# Configuration

**_Only relevant for self-hosted environments._**

While you can configure organisation-specific settings in the administrator web interface, global settings are set using environment variables. Set these environment variables when running the Seatsurfing backend Docker container.

## Example: Using Docker Compose

```
environment:
  POSTGRES_URL: 'postgres://seatsurfing:DB_PASSWORD@db/seatsurfing?sslmode=disable'
  PUBLIC_LISTEN_ADDR: '0.0.0.0:8080'
  ...
```

## List of environment variables

### Backend

| Environment Variable                    |  Type  |  Default                                                         |  Description                                                          |
| --------------------------------------- | ------ | ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| DEV                                     | bool   | 0                                                                | Development Mode, set to 1 to enable                                  |
| PUBLIC_LISTEN_ADDR                      | string | 0.0.0.0:8080                                                     | TCP/IP listen address and port                                        |
| ADMIN_UI_BACKEND                        | string | localhost:3000                                                   | Host serving the Admin UI frontend                                    |
| BOOKING_UI_BACKEND                      | string | localhost:3001                                                   | Host serving the Booking UI frontend                                  |
| DISABLE_UI_PROXY                        | bool   | 0                                                                | Disable proxy for admin and booking UI, set to 1 to disable the proxy |
| POSTGRES_URL                            | string | postgres://postgres:root @ localhost/seatsurfing?sslmode=disable | PostgreSQL Connection                                                 |
| JWT_PRIVATE_KEY                         | string |                                                                  | Path to PEM file with RSA private key for JWT signing                 |
| JWT_PUBLIC_KEY                          | string |                                                                  | Path to PEM file with RSA public key for JWT verification             |
| SMTP_HOST                               | string | 127.0.0.1                                                        | SMTP server address                                                   |
| SMTP_PORT                               | int    | 25                                                               | SMTP server port                                                      |
| SMTP_START_TLS                          | bool   | 0                                                                | Use SMTP STARTTLS extension, set to 1 to enable                       |
| SMTP_INSECURE_SKIP_VERIFY               | bool   | 0                                                                | Disable SMTP TLS certificate validation                               |
| SMTP_AUTH                               | bool   | 0                                                                | SMTP authentication, set to 1 to enable                               |
| SMTP_AUTH_USER                          | string |                                                                  | SMTP auth username                                                    |
| SMTP_AUTH_PASS                          | string |                                                                  | SMTP auth password                                                    |
| MAIL_SENDER_ADDRESS                     | string | no-reply@seatsurfing.local                                       | Mail sender address                                                   |
| MAIL_SERVICE                            | string | smtp                                                             | Mail send service (smtp = SMTP or acs = Azure Communication Services) |
| ACS_HOST                                | string |                                                                  | Azure Communication Services Host                                     |
| ACS_ACCESS_KEY                          | string |                                                                  | Azure Communication Services Access Key                               |
| MOCK_SENDMAIL                           | bool   | 0                                                                | SMTP mocking, set to 1 to enable                                      |
| INIT_ORG_NAME                           | string | Sample Company                                                   | Your organization's name                                              |
| INIT_ORG_USER                           | string | admin                                                            | Your organization's admin username                                    |
| INIT_ORG_PASS                           | string | 12345678                                                         | Your organization's admin password                                    |
| INIT_ORG_LANGUAGE                       | string | en                                                               | Your organization's ISO language code                                 |
| ALLOW_ORG_DELETE                        | bool   | 0                                                                | Allow admins to delete their own organisation                         |
| LOGIN_PROTECTION_MAX_FAILS              | int    | 10                                                               | Number of failed login attempts before user gets banned               |
| LOGIN_PROTECTION_SLIDING_WINDOW_SECONDS | int    | 600                                                              | Sliding window size in seconds for checking failed login attempts     |
| LOGIN_PROTECTION_BAN_MINUTES            | int    | 5                                                                | Ban time in minutes                                                   |
| CRYPT_KEY                               | string |                                                                  | A 32 bytes long string used for encrypting certain database fields    |
| FILESYSTEM_BASE_PATH                    | string | current working directory                                        | The base path for loading additional ressources                       |
| PUBLIC_SCHEME                           | string | https                                                            | The http scheme under which your server is publicly reachable         |
| PUBLIC_PORT                             | string | 443                                                              | The http port under which your server is publicly reachable           |

### Frontend (Admin UI, Booking UI)

| Environment Variable |  Type  |  Default                            |  Description           |
| -------------------- | ------ | ----------------------------------- | ---------------------- |
| PORT                 | int    |  3000 (Admin UI), 3001 (Booking UI) | The server's HTTP port |
