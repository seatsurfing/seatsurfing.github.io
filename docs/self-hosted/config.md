# Configuration

While you can configure organization-specific settings in the administrator web interface, global settings are set using environment variables. Set these environment variables when running the Seatsurfing backend Docker container.

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
| ALLOW_ORG_DELETE                        | bool   | 0                                                                | Allow admins to delete their own organization                         |
| LOGIN_PROTECTION_MAX_FAILS              | int    | 10                                                               | Number of failed login attempts before user gets banned               |
| LOGIN_PROTECTION_SLIDING_WINDOW_SECONDS | int    | 600                                                              | Sliding window size in seconds for checking failed login attempts     |
| LOGIN_PROTECTION_BAN_MINUTES            | int    | 5                                                                | Ban time in minutes                                                   |
| CRYPT_KEY                               | string |                                                                  | A 32 bytes long string used for encrypting certain database fields    |
| FILESYSTEM_BASE_PATH                    | string | current working directory                                        | The base path for loading additional ressources                       |
| PUBLIC_SCHEME                           | string | https                                                            | The http scheme under which your server is publicly reachable         |
| PUBLIC_PORT                             | int    | 443                                                              | The http port under which your server is publicly reachable           |
| STATIC_ADMIN_UI_PATH                    | string | /app/admin-ui                                                    | The path to the static Admin UI Web Assets                            |
| STATIC_BOOKING_UI_PATH                  | string | /app/booking-ui                                                  | The path to the static Booking UI Web Assets                          |
| CACHE_TYPE                              | string | default                                                          | The cache to use ('default' = built-in, 'valkey' = Valkey.io)         |
| VALKEY_HOSTS                            | string | 127.0.0.1:6379                                                   | Comma-separated list of Valkey hosts                                  |
| VALKEY_USERNAME                         | string | default                                                          | Valkey username                                                       |
| VALKEY_PASSWORD                         | string |                                                                  | Valkey password                                                       |
