# Rest API

Seatsurfing provides and uses a couple of REST APIs. The REST APIs are used by the mobile and web app as well as the administrator web interface.

## Authorization checks
Each API function is protected by authorization checks:

* First check: Role of the user (anonymous, user, org admin, super admin)
* Second check: Organisation membership

## Status Codes
Seatsurfing's REST API uses the well known HTTP status codes to inform the caller about the result and eventual errors:

* 201 Created: Object created (includes HTTP response header ```X-Object-ID```)
* 204 No Content: Object updated or no response content
* 400 Bad Request: Malformed request or incomplete JSON
* 401 Unauthorized: JWT in HTTP request header ```Authorization``` missing, expired or invalid
* 403 Forbidden: Authorized, by user has no access to requested resource
* 404 Not found: Object not found
* 409 Conflict: Conflicting request
* 500 Internal Server Error

## Roles
* Anonymous: Every user allowed, no authorization required
* User: Authorized user who is a member of an organisation
* Org Admin: An organisation's administrator
* Super Admin: Global administrator with access to all organisations and all functions

## Endpoints

### Authentication
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Password Login | /auth/login | POST | X | | | |
| Preflight Login to check for available login methods | /auth/preflight | POST | X | | | |
| Perform OAuth Login | /auth/{id}/login/{type} | GET | X | | | |
| OAuth Callback (server to server) | /auth/{id}/callback | GET | X | | | |
| Retrieve JWT from frontend / app after OAuth Login | /auth/verify/{id} | GET | X | | | |
| Check if instance hosts one organization only | /auth/singleorg | GET | X | | | |

### Bookings
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get one own booking | /booking/{id} | GET | | X | | |
| Update one own booking | /booking/{id} | PUT | | X | | |
| Delete one own booking | /booking/{id} | DELETE | | X | | |
| Create new own booking | /booking/ | POST | | X | | |
| Create new booking for others | /booking/ | POST | | | X | |
| Get user's own upcoming bookings | /booking/ | GET | | X | | |
| Get filtered org bookings | /booking/filter/ | POST | | | X | |

### Locations
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get one location | /location/{id} | GET | | X | | |
| Update one location | /location/{id} | PUT | | | X | |
| Delete one location | /location/{id} | DELETE | | | X | |
| Get all organization's location | /location/ | GET | | X | | |
| Create a new location | /location/ | POST | | | X | |
| Get location map | /location/{id}/map | GET | | X | | |
| Set/update location map | /location/{id}/map | POST | | | X | |

### Spaces
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get one space | /location/{locationId}/space/{id} | GET | | X | | |
| Update one space | /location/{locationId}/space/{id} | PUT | | | X | |
| Delete one space | /location/{locationId}/space/{id} | DELETE | | | X | |
| Get all spaces in a location | /location/{locationId}/space/ | GET | | X | | |
| Create a new space in a location | /location/{locationId}/space/ | POST | | | X | |
| Get spaces with availability information for a specific time period | /location/{locationId}/space/availability | POST | | X | | |

### Organisations
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get one organization | /organization/{id} | GET | | | X | |
| Update one organization | /organization/{id} | PUT | | | | X |
| Delete one organization | /organization/{id} | DELETE | | | | X |
| Get all organizations | /organization/ | GET | | | | X |
| Create a new organization | /organization/ | POST | | | | X |
| Get organization for domain | /organization/domain/{domain} | GET | X | | | |
| Get all domains for an organization | /organization/{id}/domain/ | GET | | | X | |
| Add a new domain to an organization | /organization/{id}/domain/{domain} | POST | | | X | |
| Remove a domain from an organization | /organization/{id}/domain/{domain} | DELETE | | | X | |
| Verify DNS-TXT-Record for a domain | /organization/{id}/domain/{domain}/verify | POST | | | X | |

### Search
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get search results for keyword | /search/{keyword} | GET | | X | | |

### Settings
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get all settings | /setting/ | GET | | | X | |
| Update all settings | /setting/ | PUT | | | X | |
| Get one setting | /setting/{name} | GET | | | X | |
| Update one setting | /setting/{name} | PUT | | | X | |

### Signup
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Signup and init double-opt-in | /signup/ | POST | X | | | |
| Complete double-opt-in process | /signup/confirm/{id} | POST | X | | | |

### Statistics
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get organization's stats | /stats/ | GET | | | X | |

### Users
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get one user | /user/{id} | GET | | | X | |
| Update one user | /user/{id} | PUT | | | X | |
| Delete one user | /user/{id} | DELETE | | | X | |
| Set a user's password | /user/{id}/password | PUT | | | X | |
| Get all users of an organization | /user/ | GET | | | X | |
| Create a new user in an organization | /user/ | POST | | | X | |
| Get user's own details | /user/me | GET | | X | | |

### Auth Providers
| Function | Endpoint | Method | Anonymous | User | Org Admin | Super Admin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Get one auth provider | /auth-provider/{id} | GET | | | X | |
| Update one auth provider | /auth-provider/{id} | PUT | | | X | |
| Delete one auth provider | /auth-provider/{id} | DELETE | | | X | |
| Get all auth providers of an organization | /auth-provider/ | GET | | | X | |
| Create a new auth provider in an organization | /auth-provider/ | POST | | | X | |
| Get public auth provider information for an organization | /auth-provider/org/{id} | GET | X | | | |