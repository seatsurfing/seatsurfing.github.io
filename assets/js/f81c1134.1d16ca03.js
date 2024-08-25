"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"seatsurfing-1-19-released","metadata":{"permalink":"/blog/seatsurfing-1-19-released","source":"@site/blog/2024-08-25-seatsurfing-1-19-released.md","title":"Seatsurfing 1.19 released","description":"Long time no hear! While we\'ve released several new versions of Seatsurfing since the last post from August 2023, we haven\'t blogged about them. Let\'s catch up with today\'s release of Seatsurfing 1.19.","date":"2024-08-25T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.625,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-1-19-released","title":"Seatsurfing 1.19 released","authors":"heiner","tags":["release"]},"unlisted":false,"nextItem":{"title":"Seatsurfing 1.14 released","permalink":"/blog/seatsurfing-1-14-released"}},"content":"Long time no hear! While we\'ve released several new versions of Seatsurfing since the last post from August 2023, we haven\'t blogged about them. Let\'s catch up with today\'s release of Seatsurfing 1.19.\\n\\nHere are some of the awesome new features: You can now quickly access certrain floors and spaces by direct links / QR codes. A brand-new slider allows for quickly getting an overview of the space availability in the upcoming days. Space admins can manually add and edit reservations for their users. Find out where your buddies sit at a glance. Furthermore, multiple translations made it into the new version - namely Hebrew, Romanian, Hungarian, and Dutch.\\n\\n\x3c!-- truncate --\x3e\\n\\nHere\'s what changed in Seatsurfing 1.19 since the release of Seatsurfing 1.14:\\n\\n* Feature: Added slider to get a quick overview of the week (1.19)\\n* Feature: Floor and space URLs can be accessed by direct links / QR codes (1.19)\\n* Feature: Hebrew translation for Booking and Admin UI (1.19)\\n* Feature: Romanian translation for Booking UI (1.19)\\n* Feature: Hungarian translation for the Booking UI (1.18)\\n* Feature: Dutch translation (1.16)\\n* Feature: Implemented no-admin-restrictions feature (1.18)\\n* Feature: Edit and create booking in Admin UI (1.18)\\n* Feature: Hovering over desks shows a tooltip to see who is sitting there (1.17)\\n* Feature: See each buddy\'s next booking (1.17)\\n* Feature: Add buddy by email (1.17)\\n* Feature: Add your buddies and highlight their seats (1.16)\\n* Feature: Add support for desk coloring preferences (1.16)\\n* Feature: Added support for ghcr.io (1.16)\\n* Feature: Add user concurrency limit setting (1.15)\\n* Improvement: Improved icon alignment (1.19)\\n* Improvement: Refactored Docker Builds (1.18)\\n* Fix: Switch to summer / winter time not handled correctly (1.15)\\n* Fix: Incorrect date / time format (1.15)\\n* Updated dependencies (1.19)\\n\\nAs usual, you can find the source code of version 1.19 on [GitHub](https://github.com/seatsurfing/backend). Pre-built Docker images can be pulled from the [GitHub Container Registry](https://github.com/seatsurfing?tab=packages&repo_name=backend)."},{"id":"seatsurfing-1-14-released","metadata":{"permalink":"/blog/seatsurfing-1-14-released","source":"@site/blog/2023-08-05-seatsurfing-1-14-released.md","title":"Seatsurfing 1.14 released","description":"We\'re happy to announce the availability of Seatsurfing 1.14. Version 1.14 adds Italian translations and the ability for users to change their own password. Besides, various improvements and fixes have been implemented.","date":"2023-08-05T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.95,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-1-14-released","title":"Seatsurfing 1.14 released","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.19 released","permalink":"/blog/seatsurfing-1-19-released"},"nextItem":{"title":"Seatsurfing 1.13 released","permalink":"/blog/seatsurfing-1-13-released"}},"content":"We\'re happy to announce the availability of Seatsurfing 1.14. Version 1.14 adds Italian translations and the ability for users to change their own password. Besides, various improvements and fixes have been implemented. \\n\\n\x3c!-- truncate --\x3e\\n\\nHere\'s what changed in Seatsurfing 1.14 since the release of Seatsurfing 1.13:\\n\\n* Feature: Added Italian translation\\n* Feature: Ability to change own password in Booking UI\\n* Improvement: Upgraded dependencies\\n* Fix: Changing a super admin\'s properties in Admin UI resets super admin\'s role\\n* Fix: Prevent logging in to Admin UI as a regular user\\n* Fix: Access /ui and /admin without trailing slash\\n* Fix: Fixed date picker not shown correctly in daily booking mode\\n* Fix: Fixed broken Admin UI translations\\n* Fix: Incorrect redirects in admin and booking UI\\n* Fix: Language auto-detection not working / partly translated texts\\n* Fix: Missing minimum length check when changing a user\'s password using the Admin UI\\n* Fix: Added missing login attempt recordings so that anonymous Confluence users are not deleted immediately\\n\\nAs usual, you can find the source code of version 1.14 on [GitHub](https://github.com/seatsurfing/backend) and pre-built Docker images on [Docker Hub](https://hub.docker.com/r/seatsurfing/backend)."},{"id":"seatsurfing-1-13-released","metadata":{"permalink":"/blog/seatsurfing-1-13-released","source":"@site/blog/2023-05-05-seatsurfing-1-13-released.md","title":"Seatsurfing 1.13 released","description":"A few days ago, we\'ve released Seatsurfing 1.13. This new version adds French translations to the user interfaces. Furthermore, we\'ve migrated the React-based front ends from Create React App (CRA) to Next.js. The move to Next.js allows for server-side rendering, resulting in faster load times. However, this leads to a breaking change, because the front ends are not shipped with the backend Docker image anymore, but in two separate containers (admin-ui and booking-ui).","date":"2023-05-05T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.755,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-1-13-released","title":"Seatsurfing 1.13 released","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.14 released","permalink":"/blog/seatsurfing-1-14-released"},"nextItem":{"title":"Seatsurfing 1.12 adds user-requested features","permalink":"/blog/seatsurfing-1-12-released"}},"content":"A few days ago, we\'ve released Seatsurfing 1.13. This new version adds French translations to the user interfaces. Furthermore, we\'ve migrated the React-based front ends from Create React App (CRA) to Next.js. The move to Next.js allows for server-side rendering, resulting in faster load times. However, this leads to a breaking change, because the front ends are not shipped with the backend Docker image anymore, but in two separate containers (admin-ui and booking-ui).\\n\\n\x3c!-- truncate --\x3e\\n\\nHere\'s what changed in Seatsurfing 1.13 since the release of Seatsurfing 1.12:\\n\\n* Feature: Migrated Booking UI and Admin UI to Next.js. This leads to a separated Docker containers (front ends not bundled with backend image anymore).\\n* Feature: Added French translation\\n* Improvement: Upgraded dependencies\\n* Fix: Incorrectly formatted SQL query in GetDomains function\\n\\nAs usual, you can find the source code of version 1.13 on [GitHub](https://github.com/seatsurfing/backend) and pre-built Docker images on [Docker Hub](https://hub.docker.com/r/seatsurfing/backend)."},{"id":"seatsurfing-1-12-released","metadata":{"permalink":"/blog/seatsurfing-1-12-released","source":"@site/blog/2022-12-29-seatsurfing-1-12-released.md","title":"Seatsurfing 1.12 adds user-requested features","description":"We\'re pleased to announce the release of Seatsurfing 1.12. The new release adds features our users have requested, such as login brute force prevention, an improved login-process for single-organization instances and more.","date":"2022-12-29T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.66,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-1-12-released","title":"Seatsurfing 1.12 adds user-requested features","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.13 released","permalink":"/blog/seatsurfing-1-13-released"},"nextItem":{"title":"Seatsurfing 1.10 replaces native apps with web app","permalink":"/blog/seatsurfing-pwa"}},"content":"We\'re pleased to announce the release of Seatsurfing 1.12. The new release adds features our users have requested, such as login brute force prevention, an improved login-process for single-organization instances and more.\\n\\n\x3c!-- truncate --\x3e\\n\\nHere\'s what changed in Seatsurfing 1.12 since the release of Seatsurfing 1.10:\\n\\n* Feature: Login brute force prevention\\n* Feature: Clean up anonymous confluence users\\n* Feature: Improved login process for single-org instances\\n* Feature: Make entire map scrollable in Booking UI\\n* Feature: Admin UI: Added check for Seatsurfing updates\\n* Feature: Booking UI: Improved layout of search config errors\\n* Fix: Clear SessionStorage on invalid AccessToken\\n* Fix: Fix for security issue\\n* Updated dependencies\\n\\nAs usual, you can find the source code of version 1.12 on [GitHub](https://github.com/seatsurfing/backend) and pre-built Docker images on [Docker Hub](https://hub.docker.com/r/seatsurfing/backend)."},{"id":"seatsurfing-pwa","metadata":{"permalink":"/blog/seatsurfing-pwa","source":"@site/blog/2022-07-24-seatsurfing-pwa.md","title":"Seatsurfing 1.10 replaces native apps with web app","description":"As of July 30, 2022, the Seatsurfing mobile apps for iOS and Android will be discontinued. We decided to focus on one state-of-the-art web booking interface, which is the existing, yet improved Web Booking UI. In order to optimize the user experience of the Web Booking UI when using mobile devices (such as phones and tablets), we\'ve turned it into a Progressive Web App (PWA). This means, you can \\"install\\" the web app to your device\'s home screen and benefit from enhanced caching mechanisms.","date":"2022-07-24T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.535,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-pwa","title":"Seatsurfing 1.10 replaces native apps with web app","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.12 adds user-requested features","permalink":"/blog/seatsurfing-1-12-released"},"nextItem":{"title":"Seatsurfing 1.9 released","permalink":"/blog/seatsurfing-1-9-released"}},"content":"As of July 30, 2022, the Seatsurfing mobile apps for iOS and Android will be discontinued. We decided to focus on one state-of-the-art web booking interface, which is the existing, yet improved Web Booking UI. In order to optimize the user experience of the Web Booking UI when using mobile devices (such as phones and tablets), we\'ve turned it into a Progressive Web App (PWA). This means, you can \\"install\\" the web app to your device\'s home screen and benefit from enhanced caching mechanisms.\\n\\n\x3c!-- truncate --\x3e\\n\\nAs usual, you can find the source code of version 1.10 on [GitHub](https://github.com/seatsurfing/backend) and pre-built Docker images on [Docker Hub](https://hub.docker.com/r/seatsurfing/backend)."},{"id":"seatsurfing-1-9-released","metadata":{"permalink":"/blog/seatsurfing-1-9-released","source":"@site/blog/2022-06-12-seatsurfing-1-9-released.md","title":"Seatsurfing 1.9 released","description":"Today we\u2019ve released Seatsurfing Backend version 1.9.0, including Server (RESTful API), Admin UI and Booking UI. Since release 1.8 a lot of improvements were made and new features were added. For example, your own booked spaces are highlighted in floor plans, display glitches in Confluence mode have been fixed and time zone handling has been improved.","date":"2022-06-12T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.26,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-1-9-released","title":"Seatsurfing 1.9 released","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.10 replaces native apps with web app","permalink":"/blog/seatsurfing-pwa"},"nextItem":{"title":"Seatsurfing is Open Source now","permalink":"/blog/seatsurfing-is-open-source-now"}},"content":"Today we\u2019ve released Seatsurfing Backend version 1.9.0, including Server (RESTful API), Admin UI and Booking UI. Since release 1.8 a lot of improvements were made and new features were added. For example, your own booked spaces are highlighted in floor plans, display glitches in Confluence mode have been fixed and time zone handling has been improved.\\n\\n\x3c!-- truncate --\x3e\\n\\nHere are all major new features and improvements included in Seatsurfing Backend 1.9 implemented since version 1.8:\\n\\n* Backend: Admins can create bookings for users not existing yet (can be enabled in Admin UI\u2019s settings).\\n* Confluence: When user\u2019s email is available on login, the user is created/updated with his unique email address instead of a unique ID.\\n* Booking UI: Own booked spaces are displayed in other color.\\n* Booking UI: Space admins can see bookers\u2019 names.\\n* Booking UI: Added tooltips.\\n* Booking UI: Fixed and improved timezone handling.\\n* Booking UI: Updated to Bootstrap v5.\\n* Admin UI: Space admins can cancel a user\u2019s bookings.\\n* Admin UI: Fixed non-working area filter in Analysis report.\\n* Admin UI: Updated to Bootstrap v5.\\n* General: Updated URL from seatsurfing.de to seatsurfing.app.\\n* Docker image: Added multi-arch Docker image builds (amd64, arm64, arm32v7).\\n* Docker image: Server binary is built with certain ldflags to reduce file size.\\n* Docker image: Switched to \u201cDistroless\u201d container image to reduce image size and attack vectors.\\n\\nAs usual, you can find the source code of version 1.9 on [GitHub](https://github.com/seatsurfing/backend) and pre-built Docker images on [Docker Hub](https://hub.docker.com/r/seatsurfing/backend)."},{"id":"seatsurfing-is-open-source-now","metadata":{"permalink":"/blog/seatsurfing-is-open-source-now","source":"@site/blog/2021-11-26-seatsurfing-is-open-source-now.md","title":"Seatsurfing is Open Source now","description":"Your contribution is welcome: We\u2019ve published Seatsurfing\u2019s source code on GitHub. The code of the backend, admin web interface, booking web interface and mobile app is licensed under the GNU General Public License (GPL) v3.0. The release of Seatsurfing\u2019s source code happens in the hope that you as a community will contribute to future developments. Nevertheless, we\u2019ll keep on improving Seatsurfing and ensure a stable release process.","date":"2021-11-26T00:00:00.000Z","tags":[{"inline":true,"label":"news","permalink":"/blog/tags/news"}],"readingTime":0.37,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-is-open-source-now","title":"Seatsurfing is Open Source now","authors":"heiner","tags":["news"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.9 released","permalink":"/blog/seatsurfing-1-9-released"},"nextItem":{"title":"Seatsurfing 1.8 adds bookings preferences","permalink":"/blog/seatsurfing-1-8-adds-bookings-preferences"}},"content":"Your contribution is welcome: We\u2019ve published Seatsurfing\u2019s source code on GitHub. The code of the backend, admin web interface, booking web interface and mobile app is licensed under the GNU General Public License (GPL) v3.0. The release of Seatsurfing\u2019s source code happens in the hope that you as a community will contribute to future developments. Nevertheless, we\u2019ll keep on improving Seatsurfing and ensure a stable release process.\\n\\n\x3c!-- truncate --\x3e\\n\\n[Visit Seatsurfing on GitHub](https://github.com/seatsurfing/backend)"},{"id":"seatsurfing-1-8-adds-bookings-preferences","metadata":{"permalink":"/blog/seatsurfing-1-8-adds-bookings-preferences","source":"@site/blog/2021-11-25-seatsurfing-1-8-adds-bookings-preferences/index.md","title":"Seatsurfing 1.8 adds bookings preferences","description":"We\u2019re happy to announce the release of Seatsurfing 1.8. The new version applies to both backend and mobile app. It adds some requested features making the lives of both administrators and users easier. Users can now set their individual booking preferences leading to even quicker bookings. Administrators can set floor plan administrators and enjoy new reporting functionalities.","date":"2021-11-25T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.975,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-1-8-adds-bookings-preferences","title":"Seatsurfing 1.8 adds bookings preferences","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing is Open Source now","permalink":"/blog/seatsurfing-is-open-source-now"},"nextItem":{"title":"Seatsurfing 1.7 with fresh design and new features","permalink":"/blog/seatsurfing-1-7-with-fresh-design-and-new-features"}},"content":"We\u2019re happy to announce the release of Seatsurfing 1.8. The new version applies to both backend and mobile app. It adds some requested features making the lives of both administrators and users easier. Users can now set their individual booking preferences leading to even quicker bookings. Administrators can set floor plan administrators and enjoy new reporting functionalities.\\n\\n\x3c!-- truncate --\x3e\\n\\nThese are the new features of Seatsurfing 1.8:\\n\\n* Booking UI and mobile app: Users can now set individual bookings preferences. Configure your business days, usual check-in and check-out times, and favorite area.\\n* Admin UI: New role \u201cFloor Plan Administrator\u201d for users who manage floor plans and spaces, but should not be able to modify system settings or users.\\n* Admin UI: New functionality \u201cAnalysis\u201d, showing which users have been in the office at a certain day. This is i.e. useful for Covid-19 contact tracing.\\n* Admin UI: All tables can be exported to Excel (XLSX).\\n* And as usual, minor bug fixes and improvements.\\n\\nWe hope you\u2019ll enjoy this new release. If you have feature requests or questions, please let us know by using our [issue tracker on GitHub](https://github.com/seatsurfing/backend/issues).\\n\\n![Seatsurfing 1.8 Booking Preferences](seatsurfing-1.8.png)"},{"id":"seatsurfing-1-7-with-fresh-design-and-new-features","metadata":{"permalink":"/blog/seatsurfing-1-7-with-fresh-design-and-new-features","source":"@site/blog/2021-11-06-seatsurfing-1-7-with-fresh-design-and-new-features/index.md","title":"Seatsurfing 1.7 with fresh design and new features","description":"Today we\u2019ve released Seatsurfing Backend and App Version 1.7.","date":"2021-11-06T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.965,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-1-7-with-fresh-design-and-new-features","title":"Seatsurfing 1.7 with fresh design and new features","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.8 adds bookings preferences","permalink":"/blog/seatsurfing-1-8-adds-bookings-preferences"},"nextItem":{"title":"Free test accounts","permalink":"/blog/free-test-accounts"}},"content":"Today we\u2019ve released Seatsurfing Backend and App Version 1.7.\\n\\nWith version 1.7, both Seatsurfing\u2019s app and our web booking interface got a brand new design which is much easier to use. Floor plan and search dialog have been integrated, so you can easily change your search criteria and watch the available spaces on the map update instantly. If you already know which spaces you\u2019d like to book, you can switch to the new list mode and pick your favorite desk directly.\\n\\n\x3c!-- truncate --\x3e\\n\\nWhile this is the most obvious part of the update, there\u2019s a lot more:\\n\\n* New authentication method under the hood which provides more security\\n* New \u201cremember me\u201d functionality\\n* Leave date and time get updated automatically when changing the enter date\\n* Added location time zone support\\n* Added ability to set maximum concurrent location occupancy\\n* Fixed bug which prevented users from booking spaces the same day with active daily basis booking\\n* Fixed bug which caused showing an incorrect booking duration in admin interface\\n\\nHead to [our website](/) for more information on how to get your Seatsurfing installation up and running quickly.\\n\\n![Seatsurfing 1.7 Redesign](seatsurfing-1.7.png)"},{"id":"free-test-accounts","metadata":{"permalink":"/blog/free-test-accounts","source":"@site/blog/2021-09-04-free-test-accounts.md","title":"Free test accounts","description":"If you want to give Seatsurfing a try, we\u2019ve created an easy way for you: You can now create test accounts directly on our website. In just a few seconds, your organization will be set up. You can then test Seatsurfing with up to ten users for free. Visit the sign up page to create your account.","date":"2021-09-04T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.285,"hasTruncateMarker":false,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"free-test-accounts","title":"Free test accounts","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.7 with fresh design and new features","permalink":"/blog/seatsurfing-1-7-with-fresh-design-and-new-features"},"nextItem":{"title":"Seatsurfing 1.5 enables self-hosted Docker instances","permalink":"/blog/seatsurfing-1-5-enables-self-hosted-docker-instances"}},"content":"If you want to give Seatsurfing a try, we\u2019ve created an easy way for you: You can now create test accounts directly on our website. In just a few seconds, your organization will be set up. You can then test Seatsurfing with up to ten users for free. Visit the sign up page to create your account."},{"id":"seatsurfing-1-5-enables-self-hosted-docker-instances","metadata":{"permalink":"/blog/seatsurfing-1-5-enables-self-hosted-docker-instances","source":"@site/blog/2021-08-06-seatsurfing-1-5-enables-self-hosted-docker-instances.md","title":"Seatsurfing 1.5 enables self-hosted Docker instances","description":"We\u2019re happy to announce the availability of Seatsurfing 1.5. The new version marks a big change in Seatsurfing\u2019s operating model: Seatsurfing\u2019s Backend is now available on Docker Hub and thus allows you to host your Seatsurfing instance on-premises and free of charge. At the same time we\u2019ve removed the Cloud hosting option (for now). We decided to go this way as we think it\u2019s easier for most European organization to comply with the data protection regulations when going on-premises. However, we\u2019ll consider bringing back Seatsurfing as a Cloud-hosted Software as a Service (SaaS) at a later time.","date":"2021-08-06T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.865,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"seatsurfing-1-5-enables-self-hosted-docker-instances","title":"Seatsurfing 1.5 enables self-hosted Docker instances","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Free test accounts","permalink":"/blog/free-test-accounts"},"nextItem":{"title":"Daily basis booking and bookers\u2019 names in Seatsurfing 1.2","permalink":"/blog/daily-basis-booking-and-bookers-names-in-seatsurfing-1-2"}},"content":"We\u2019re happy to announce the availability of Seatsurfing 1.5. The new version marks a big change in Seatsurfing\u2019s operating model: Seatsurfing\u2019s Backend is now available on Docker Hub and thus allows you to host your Seatsurfing instance on-premises and free of charge. At the same time we\u2019ve removed the Cloud hosting option (for now). We decided to go this way as we think it\u2019s easier for most European organization to comply with the data protection regulations when going on-premises. However, we\u2019ll consider bringing back Seatsurfing as a Cloud-hosted Software as a Service (SaaS) at a later time.\\n\\n\x3c!-- truncate --\x3e\\n\\nFor more information, please refer to the documentation. We\u2019ve updated it in order to represent necessary instructions on how to get your Docker container up and running quickly.\\n\\nPlease also note that Seatsurfing\u2019s App for iPhone and iPad got a new home at the App Store. You should therefore uninstall your existing Seatsurfing App and get the new version from the App Store. The app for Google Android remains at its known place."},{"id":"daily-basis-booking-and-bookers-names-in-seatsurfing-1-2","metadata":{"permalink":"/blog/daily-basis-booking-and-bookers-names-in-seatsurfing-1-2","source":"@site/blog/2021-06-13-daily-basis-booking-and-bookers-names-in-seatsurfing-1-2/index.md","title":"Daily basis booking and bookers\u2019 names in Seatsurfing 1.2","description":"Today we\u2019ve released version 1.2.0 of the Seatsurfing App. This new version includes two new requested features we\u2019re happy to depict here.","date":"2021-06-13T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.94,"hasTruncateMarker":true,"authors":[{"name":"Heiner","title":"Seatsurfing Developer","url":"https://github.com/virtualzone","imageURL":"https://github.com/virtualzone.png","key":"heiner","page":null}],"frontMatter":{"slug":"daily-basis-booking-and-bookers-names-in-seatsurfing-1-2","title":"Daily basis booking and bookers\u2019 names in Seatsurfing 1.2","authors":"heiner","tags":["release"]},"unlisted":false,"prevItem":{"title":"Seatsurfing 1.5 enables self-hosted Docker instances","permalink":"/blog/seatsurfing-1-5-enables-self-hosted-docker-instances"}},"content":"Today we\u2019ve released version 1.2.0 of the Seatsurfing App. This new version includes two new requested features we\u2019re happy to depict here.\\n\\nThe first feature is daily basis booking. We want to make it easier for the employees of some organizations to book their seats. If you want to keep seat booking really easy, you can activate the daily basis booking functionality in the administration interface. When activated, users using the App or the Booking Web Interface just need to pick a desired date and do not need to provide a time range. The selected space is then booked for one or multiple entire days.\\n\\n\x3c!-- truncate --\x3e\\n\\nThe second feature allows for showing the names of the colleagues having booked a space during the selected time range. When activated by the organization\u2019s administrator, users are able to tap or click an occupied seat to show the names and time ranges of this seat. We did not have implemented this feature at first with respect to the users\u2019 privacy. However, we think that you should have the chance to decide for yourself.\\n\\n![Seatsurfing 1.2 shows the user\'s names](show_names.gif)"}]}}')}}]);