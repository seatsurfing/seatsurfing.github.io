# Features

## Introduction
Seatsurfing is a solution for organisations and enterprises. It allows your employees to book spaces and seats on their own. Seatsurfing enables organisations to drive change towards flexible working times and free seating.

Seatsurfing uses an abstract model for bookable locations. You can therefore use Seatsurfing for multiple purposes:

* Booking single seats in co-working facilities (free seating, flexible seating)
* Booking entire rooms (i.e. conference rooms)
* Booking parking lots
* ...and more...

The application does currently *not* contain an accounting model. This means that you can't bill commercially rentable spaces (such as desks in a coworking space). Seatsurfing is meant for organisations providing free seats to their employees.

## Components
Seatsurfing consists of:

* A server backend providing a REST API
* A web-based administrator interface for ones managing the spaces and users (bundled with the server backend)
* A mobile-ready progressive web app (PWA) which can be used by an organisation's employees to book seats (also available as a Confluence App, bundled with the server backend)

## Features
The most important features of Seatsurfing are:

* Booking seats quickly and flexibly using a mobile-ready web app
* Logging in via password or OAuth2
* Uploading room plans as JPEG, PNG or GIF
* Placing spaces/seats via drag & drop
* Configurable booking settings (i.e. max. booking duration, notice and count)
* Viewing booking and utilization statistics

## Hosting
Seatsurfing is provided as a Docker image for hosting on-premises. It has been tested using ```docker run```, Docker Compose and Kubernetes.