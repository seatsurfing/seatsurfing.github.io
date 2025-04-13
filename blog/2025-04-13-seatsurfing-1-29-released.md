---
slug: seatsurfing-1-29-released
title: Fast forward - from Seatsurfing 1.21 to 1.29
authors: heiner
tags: [release]
---

The past weeks ran fast: We've released eight new versions (plus multiple fix versions) of Seatsurfing, each containing exciting new features. Features which our users asked for. As we've not blogged about versions 1.22 to 1.28, this blog post summarized the most remarkable features and improvements since the release of version 1.21 which was released by the end of 2024.

<!-- truncate -->

Here's what changed in Seatsurfing 1.29 since the release of Seatsurfing 1.21:

* Feature: Add Estonian translation for Booking UI (1.28)
* Feature: Add ability to assign attributes to spaces in Admin UI (1.27)
* Feature: Show and search for space attributes in Booking UI (1.27)
* Feature: Add Azure Communication Services (ACS) as alternative to SMTP for sending mails (1.26)
* Feature: Cloud hosted Seatsurfing adds individual subdomains and custom domains (1.25)
* Feature: Sse real email address as username (1.25)
* Feature: ARIA labels to Booking UI form for improved accessibility (1.25)
* Feature: Allow to cancel your bookings directly from the map (1.23)
* Feature: Connect your calendar via CalDAV and keep track of your space bookings (1.22)
* Feature: Add filtering options for Number of spaces, Number of free spaces and Buddies on site (1.22)
* Improvement: Make language changes persistent (1.28)
* Improvement: Display version on preferences page in Admin UI (1.28)
* Improvement: Optimize language handling in Admin and Booking UI (1.27)
* Improvement: Perform database schema updates more resilient (1.26)
* Improvement: Support PostgreSQL < v16 (1.26)
* Improvement: Sdd auth provider template for Okta (1.26)
* Improvement: Improve password reset process (1.25)
* Improvement: List user bookings according to location's timezone (1.24)
* Improvement: Create/verify JWT Access Tokens with asymmetric RSA algorithm (1.24)
* Improvement: Optimized date formatting (1.22)
* Improvement: Added Content Security Policy (CSP) to the frontends (1.22)
* Various bug fixes
* Updated dependencies

As usual, you can find the source code of version 1.29 on [GitHub](https://github.com/seatsurfing/). Pre-built Docker images can be pulled from the [GitHub Container Registry](https://github.com/seatsurfing?tab=packages&repo_name=backend).