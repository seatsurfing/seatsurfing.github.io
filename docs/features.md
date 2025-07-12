# Features

## Introduction

Seatsurfing is a solution for organizations and enterprises. It allows your employees to book spaces and seats on their own. Seatsurfing enables organizations to drive change towards flexible working times and desk sharing.

Seatsurfing uses an abstract model for bookable locations. You can therefore use Seatsurfing for multiple purposes:

- Booking single seats in co-working facilities (free seating, flexible seating)
- Booking entire rooms (i.e. conference rooms)
- Booking parking lots
- ...and more...

The application does currently _not_ contain an accounting model. This means that you can't bill commercially rentable spaces (such as desks in a coworking space). Seatsurfing is meant for organizations providing free seats to their employees.

## Components

Seatsurfing consists of:

- A server backend providing a REST API
- A web-based administrator interface for ones managing the spaces and users (bundled with the server backend)
- A mobile-ready progressive web app (PWA) which can be used by an organization's employees to book seats (also available as a Confluence App, bundled with the server backend)

## Features

The most important features of Seatsurfing are:

### From a user's perspective

- Book spaces quickly and flexibly using a mobile-ready web app
- Select spaces using visual floor plans or list views
- Filter appropriate areas and spaces
- Keep track of upcoming bookings and cancel if necessary
- View bookings in personal calendar via the standardized CalDAV protocol

### From an organization administrator's perspective

- Upload floor plans as JPEG, PNG or GIF
- Place spaces/seats via drag & drop
- Attach freely declarable attributes and values to areas and spaces
- Configurable booking settings (i.e. max. booking duration, notice and count)
- View booking and utilization statistics
- Authentication via username/password or OAuth2 (use your own Identity Provider/IdP)
- Set spaces (i.e. rooms) that require an approval before a booking request is confirmed
- Set booking limitations, i.e. limit booking to specific groups of users

## Hosting

You can choose your desired hosting model:

- Software as a Service (SaaS) in Free and Professional plans provided by seatsurfing.io ([click here to create a free account](/sign-up))
- Hosting on your own server by deploying a pre-built container image (i.e. Docker, Podman, Kubernates)
