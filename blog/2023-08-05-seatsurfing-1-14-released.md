---
slug: seatsurfing-1-14-released
title: Seatsurfing 1.14 released
authors: heiner
tags: [release]
---

We're happy to announce the availability of Seatsurfing 1.14. Version 1.14 adds Italian translations and the ability for users to change their own password. Besides, various improvements and fixes have been implemented. 

<!-- truncate -->

Here's what changed in Seatsurfing 1.14 since the release of Seatsurfing 1.13:

* Feature: Added Italian translation
* Feature: Ability to change own password in Booking UI
* Improvement: Upgraded dependencies
* Fix: Changing a super admin's properties in Admin UI resets super admin's role
* Fix: Prevent logging in to Admin UI as a regular user
* Fix: Access /ui and /admin without trailing slash
* Fix: Fixed date picker not shown correctly in daily booking mode
* Fix: Fixed broken Admin UI translations
* Fix: Incorrect redirects in admin and booking UI
* Fix: Language auto-detection not working / partly translated texts
* Fix: Missing minimum length check when changing a user's password using the Admin UI
* Fix: Added missing login attempt recordings so that anonymous Confluence users are not deleted immediately

As usual, you can find the source code of version 1.14 on [GitHub](https://github.com/seatsurfing/) and pre-built Docker images on [Docker Hub](https://hub.docker.com/r/seatsurfing/backend).