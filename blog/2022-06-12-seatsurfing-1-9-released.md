---
slug: seatsurfing-1-9-released
title: Seatsurfing 1.9 released
authors: heiner
tags: [release]
---

Today we’ve released Seatsurfing Backend version 1.9.0, including Server (RESTful API), Admin UI and Booking UI. Since release 1.8 a lot of improvements were made and new features were added. For example, your own booked spaces are highlighted in floor plans, display glitches in Confluence mode have been fixed and time zone handling has been improved.

<!-- truncate -->

Here are all major new features and improvements included in Seatsurfing Backend 1.9 implemented since version 1.8:

* Backend: Admins can create bookings for users not existing yet (can be enabled in Admin UI’s settings).
* Confluence: When user’s email is available on login, the user is created/updated with his unique email address instead of a unique ID.
* Booking UI: Own booked spaces are displayed in other color.
* Booking UI: Space admins can see bookers’ names.
* Booking UI: Added tooltips.
* Booking UI: Fixed and improved timezone handling.
* Booking UI: Updated to Bootstrap v5.
* Admin UI: Space admins can cancel a user’s bookings.
* Admin UI: Fixed non-working area filter in Analysis report.
* Admin UI: Updated to Bootstrap v5.
* General: Updated URL from seatsurfing.de to seatsurfing.app.
* Docker image: Added multi-arch Docker image builds (amd64, arm64, arm32v7).
* Docker image: Server binary is built with certain ldflags to reduce file size.
* Docker image: Switched to “Distroless” container image to reduce image size and attack vectors.

As usual, you can find the source code of version 1.9 on [GitHub](https://github.com/seatsurfing/backend) and pre-built Docker images on [Docker Hub](https://hub.docker.com/r/seatsurfing/backend).