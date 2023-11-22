---
slug: seatsurfing-1-13-released
title: Seatsurfing 1.13 released
authors: heiner
tags: [release]
---

A few days ago, we've released Seatsurfing 1.13. This new version adds French translations to the user interfaces. Furthermore, we've migrated the React-based front ends from Create React App (CRA) to Next.js. The move to Next.js allows for server-side rendering, resulting in faster load times. However, this leads to a breaking change, because the front ends are not shipped with the backend Docker image anymore, but in two separate containers (admin-ui and booking-ui).

<!-- truncate -->

Here's what changed in Seatsurfing 1.13 since the release of Seatsurfing 1.12:

* Feature: Migrated Booking UI and Admin UI to Next.js. This leads to a separated Docker containers (front ends not bundled with backend image anymore).
* Feature: Added French translation
* Improvement: Upgraded dependencies
* Fix: Incorrectly formatted SQL query in GetDomains function

As usual, you can find the source code of version 1.14 on [GitHub](https://github.com/seatsurfing/backend) and pre-built Docker images on [Docker Hub](https://hub.docker.com/r/seatsurfing/backend).