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
| SMTP_AUTH_METHOD                        | string | PLAIN                                                            | SMTP authentication method: PLAIN or LOGIN                            |
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
| STATIC_UI_PATH                          | string | /app/ui                                                          | The path to the static UI Web Assets                            |
| CACHE_TYPE                              | string | default                                                          | The cache to use ('default' = built-in, 'valkey' = Valkey.io)         |
| VALKEY_HOSTS                            | string | 127.0.0.1:6379                                                   | Comma-separated list of Valkey hosts                                  |
| VALKEY_USERNAME                         | string | default                                                          | Valkey username                                                       |
| VALKEY_PASSWORD                         | string |                                                                  | Valkey password                                                       |

## Recommended M365 SMTP configuration

**Please note:** Required option ```SMTP_AUTH_METHOD``` has been added in version 1.44.0.

```bash
MAIL_SERVICE=smtp
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_START_TLS=1
SMTP_AUTH=1
SMTP_AUTH_METHOD=LOGIN
SMTP_AUTH_USER=your-email@yourdomain.com
SMTP_AUTH_PASS=your-app-password
MAIL_SENDER_ADDRESS=your-email@yourdomain.com
```

### Security Notes

- Use App Passwords instead of regular passwords when possible
- Ensure STARTTLS is enabled (`SMTP_START_TLS=1`)
- Never set `SMTP_INSECURE_SKIP_VERIFY=1` in production

### Troubleshooting

If emails still fail to send:

1. Verify your M365 account has SMTP AUTH enabled
2. Use an App Password instead of your regular password
3. Check that your firewall allows outbound connections to port 587
4. Enable debug logging to see detailed SMTP conversation
5. Try both PLAIN and LOGIN authentication methods