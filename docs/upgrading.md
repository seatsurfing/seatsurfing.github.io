# Upgrading

***Only relevant for self-hosted environments.***

Seatsurfing supports automated in-place upgrades. When starting a newer version of Seatsurfing backend with an existing database, the database schema version is determined and required schema upgrades are performed automatically.

Note: Downgrades are _not_ supported and may result in startup failures and corrupt data!

## Steps to upgrade

1. Backup your existing Seatsurfing database. Example:  
```pg_dumpall -U seatsurfing' > ./seatsurfing_db.psql```
1. Shut down the running Seatsurfing backend Docker container.
1. Start the newer version of the Seatsurfing backend with the existing database.