# Administration UI

You can access the administration web interface using a modern web browser by visiting your Seatsurfing's instance backend:

- Cloud-hosted environments / SaaS: https://&lt;your-domain&gt;.seatsurfing.app/admin/
- Self-hosted environments: [http://localhost:8080/admin/](http://localhost:8080/admin/)

To log in to the administrator interface, your user must be equipped with org admin permissions.

After logging in, you'll see a web interface like this:

![Admin UI Screenshot](img/admin-ui.png)

At the left, you can navigate to the various areas of the administrator interface.

At the head, you can quickly search for objects (such as users, locations, spaces). Right beside the search bar, you can log out.

The main area views the functionality you've selected. Right after logging in, the main area shows current statistics in a dashboard.

## Dashboard

The dashboard shows current statistics for your Seatsurfing organization. The statistics and numbers are intended to support you in review usage and user acceptance. Furthermore, Seatsurfing calculates space utilization in real time. This way you can always keep an eye on supply and demand.

The top of the dashboard shows information regarding the number of users, locations and spaces as well as the total number of bookings.

Below that, you can see current booking numbers of today, yesterday, the current week and the previous week.

The bar charts visualize the utilization of your spaces.

## Areas

An area in Seatsurfing is anything that has a ground plan. This can be a single floor on a building. In this area you can manage spaces. A space is something a user can book – depending on your concept, it can be a seat, a desk or an entire room.

In the "Areas" section you can manage your areas and the spaces within them.

In order to manage spaces in an area, you have to upload a floor plan in JPEG, PNG or GIF format. Make sure your floor plan has an appropriate format and resolution. If the resolution is too high, your employees need to scroll a lot and may lose the plot.

You can place spaces via drag & drop. Keep the left mouse button pressed to move a space around. To change a space's size, click the lower right corner of a space. To name a space, click on the space's label and enter the new name. Select a space and click "Edit" or double-click a space in order to set additional settings.

Don't forget to save your changes afterwards.

### Attributes

Attributes are pieces of information you can set and attach to locations (and prepared to be attached to spaces in later versions). Attributes can be shown per location by your users in the Booking UI. Furthermore, users of the Booking UI can search for locations which match attributes they need.

For example, as an administrator, you can specify whether a location is accessible with wheelchairs or what kind of media system is installed. Your users can view a location's attributes and filter the list of locations according to their needs.

To specify the available attributes, navigate to "Areas" and select "Attributes". An attribute can be of type number (integer), true / false (boolean), or text (string).

After defining one or more attributes, these attributes can be selected and set per location in the "Attributes" section.

## Bookings

The "Bookings" section shows a list of bookings in your organization. You can narrow the bookings listed by adjusting the Enter and Leave times above the table.

## Approvals

The "Approvals" section shows a list of booking requests that require an approval before being confirmed. Space and organization administrators can navigate to this section. Only approvals which can be approved by the current admin (depending on the approval groups set on the corresponding space) are listed.

## Analysis

The "Analysis" section shows a report of bookings / days of presence during the specified period.

## Users

In the "Users" section you can manage your employees which have access to your Seatsurfing organization.

Depending on your configuration in the Settings (see below), your employees can log in to Seatsurfing when successfully authenticated against your corporation's user directory service. This way, there's no need to administer all Seatsurfing users manually. When logging in for the first time, a Seatsurfing user account is created automatically.

To create or modify users manually, click the "Add" button or click a user from the list. You can set the username (using the user's email address) and his password. Setting a password is only necessary if your user is not authenticating using a linked authentication provider.

You can assign a user one of the following roles:

- User: A regular user which is able to use the Booking UI to manage his/her own bookings. A user is _not_ able to access the Administrator Interface.
- Floor Plan Administrator: Everything a User can do, plus access the administrator interface to manage areas and floor plans, spaces, and approvals.
- Organization Administrator: Everything a Floor Plan Administrator can do, plus manage users, groups, settings and subscriptions.
- Service Account: A special kind of Organization Administrator which can only be used to call Seatsurfing's REST APIs. A Service Account can not log in to Seatsurfing's web interfaces. To call a REST API using a Service Account, use HTTP Basic Authentication.

All kind of administrators should have long, secure and complex passwords.

## Groups

A "Group" is a set of users. Groups can i.e. be used as approvers or in order to limit the disposability of spaces (by adjusting a space's settings).

## Settings

In the "Settings" section you can configure settings which apply to your entire Seatsurfing organization.

### Common settings

**Max. bookings per user:** Limits the number of upcoming bookings per user.

**Max. concurrent bookings per user:** Determines how many concurrent bookings each user may have.

**Max. days in advance:** Specifies how many days in advance a booking can be placed.

**Don't restrict admins (bookings per user, duration, in advance):** If this flag is set all admins (FloorPlan/Org/Super) are allowed to book limitless, except the max-bookings-per-area limitation.

**Allow bookings on a daily basis only**: When enabled, users can book spaces for entire days only and do not need to enter enter and leave times.

**Max. booking duration:** Limits the duration of a single bookings.

**Show bookers' names**: Reveal the names of other bookers when booking a space. You should mind the privacy.

**Confluence Shared Secret:** A shared secret which is required for signing messages when using Seatsurfing's Confluence App.

**Domains:** A list of domains under which Seatsurfing can be accessed for the selected organization. Adding a domain requires an ownership verification. This requires access to your domain's DNS server as a TXT record needs to be added.

### Custom domains
**_Only relevant for cloud-hosted environments._**

By adding a custom domain, you can access your organization's Seatsurfing instance under a custom (sub-)domain – such as ```seatsurfing.your-company.com``` instead of ```your-company.seatsurfing.app```.

To add a custom domain, please follow these steps:
1. Set up a CNAME DNS record for your desired (sub-)domain and point it to:
   
   ```custom-de-1.seatsurfing.io.```
1. Add this (sub-)domain as a new entry to the domain list in the Settings section of the Administration UI.
1. Perform the shown steps to verify domain ownership by adding a TXT DNS record to your DNS zone.
1. Wait a few minutes until our systems have verified ownership and accessibility of your custom domain name.

### Auth Providers

**Allow login of all authenticatable users:** When enabled, users can authenticate using an associated auth provider (see below) without having to be managed in Seatsurfing's internal user directory beforehand. A user account in Seatsurfing's database will be created upon first successful authentication.

Auth providers are services taking care of authenticating your users using standardised, secure protocols. Seatsurfing currently supports the OAuth 2 protocol.

By adding an auth provider, you can validate your Seatsurfing logins using your company's internal user directory. The passwords (or other identification criteria) entered by your users are not transferred to Seatsurfing when using an auth provider.

To add an auth provider, click the Add button at the upper right. Depending on the type of your auth provider, various different technical information are needed. Please ask your auth provider's technical administrator for these information. You can also use the templates prepared at the bottom of the dialog.

Auth providers can be used in addition to password authentication. When logging in, Seatsurfing checks if the requested user already exists in Seatsurfing's internal user directory. If he does exist and password authentication is enabled, the user will be prompted for her password. If it does not exists or has no password set, she can log in using one of the configured auth providers.

You can use the following placeholders in your specified URLs:

- `{logoutRedirectUri}` - the Logout URL your users will be redirected to after logging out

### Danger zone

Use this section to delete your Seatsurfing organization. The deletion is performed irrevocably. All data associated with your Seatsurfing organization will be deleted and can not be restored. You should _only_ use this functionality if you're absolutely sure about what you're doing.

## Subscription

**_Only relevant for cloud-hosted environments._**

As an organization administrator, you can manage your subscription.

This allows you to upgrade to the Professional plan, or, just in case, to downgrade to the Free plan at any time.

## Search

The search box at the top of the administrator web-interface can be used by entering a keyword and pressing the enter key.

Search includes your users' email addresses (usernames) as well as the names of areas and spaces.
