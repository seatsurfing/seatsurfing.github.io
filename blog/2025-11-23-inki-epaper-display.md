---
slug: inki-epaper-display
title: "inki, the wireless e-paper display for Seatsurfing"
authors: heiner
tags: [news]
---

We’re thrilled to shine a spotlight on an open-source project closely integrated with Seatsurfing — **inki**, developed by the maintainer c0de111. [inki](https://c0de111.github.io/inki/seatsurfing/) is a Community-developed software which brings live seating and room-booking data from Seatsurfing directly to your office walls — and it does so with elegance, sustainability, and very little maintenance.

<!-- truncate -->

## What is inki?

[inki](https://c0de111.github.io/inki/seatsurfing/) is a software for bare-metal systems like the Raspberry Pi Pico W, designed specifically for low-power operation. It wakes up periodically via a real-time clock (RTC), fetches data via Wi-Fi (e.g., from Seatsurfing’s REST API), displays that information on an e-paper screen, and then powers itself down — all autonomously.

The project supports two e-paper sizes — **4.2"** and **7.5"**, allowing you to choose the form factor that best fits your space.
Because e-paper retains its content even when unpowered, the display remains readable without consuming power.

![](/img/blog/inki1.jpg)

## Why it’s a perfect fit for Seatsurfing

- **Live desk & room status:** Once configured, inki queries your Seatsurfing server to pull the current booking status (who is sitting where, which rooms are occupied, etc.) and displays it cleanly on the screen.
- **Browser-based setup:** You configure inki via its own Wi-Fi access point. Point your browser to the setup page, enter your Seatsurfing API credentials (such as service account, space IDs), and you’re ready to go — no cables, no USB programmers.
- **Logo & branding:** You can even upload a custom logo or pictogram to be shown on the e-paper – making the display match your company’s visual identity.
- **Low maintenance:** Thanks to the RTC-based power control, the device can run for thousands of update cycles on simple AA or AAA batteries.

## Key technical features

- **Ultra-low power:** Uses a DS3231 RTC and a MOSFET circuit so that the Pico W is completely unpowered between wake-ups, drawing only micro-amperes.
- **Wireless updates:** Firmware updates are done over the air. Just connect to the inki Wi-Fi, upload the new firmware via browser, and reboot.
- **Multiple pages:** inki supports up to 8 configurable “pages” that users can cycle through using onboard buttons — e.g., room occupancy, “Do Not Disturb,” device info, and more.
- **Hardware & open source:** The project provides full hardware design files (PCB, 3D-printed enclosure), firmware (C code), and documentation under open-source licenses.

![](/img/blog/inki2.jpg)

## Real-world use cases

- **Room signage:** Mount inki outside meeting rooms to display real-time status (free, occupied, meeting name) pulled from Seatsurfing.
- **Desk sharing boards:** Use in open offices to give a live visual overview of who is sitting where.
- **Beyond booking:** Thanks to its modular firmware, inki can be repurposed for other data-display roles — for example, visualizing live sensor data from home automation systems (e.g., Homematic/CCU Historian).

## Why we love it

[inki](https://c0de111.github.io/inki/seatsurfing/) embodies the principles of simplicity, efficiency, and practicality — qualities that resonate deeply with Seatsurfing’s mission. By combining ultra-low power hardware with a smart software design, it creates a seamless, tangible way to connect digital booking data with physical space. inki achieves this by using the documented REST APIs provided by Seatsurfing's open source project. It’s exactly the kind of community-driven innovation we hoped for when we open-sourced Seatsurfing.

## Getting started

If you’re interested in using inki with your Seatsurfing instance:

1. Visit the inki project website: [c0de111.github.io/inki](https://c0de111.github.io/inki/)
1. Download the inki_seatsurfing.uf2 firmware from the GitHub repository.
1. Flash it onto a Pico W, set it up via its Wi-Fi interface, configure Seatsurfing API credentials, and select your space ID.
1. Insert batteries, mount the device, and enjoy a live status display that literally runs for years.

## A big thanks to the creator

We’d like to express our deep gratitude to [c0de111](https://github.com/c0de111) for building this neat integration. Projects like inki make the Seatsurfing ecosystem richer — they bridge the gap between the digital booking world and physical reality, in a way that feels intuitive and elegant. ❤️

![](/img/blog/inki3.jpg)
