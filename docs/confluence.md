# Confluence

You can integrate the web booking interface for your employees into [Atlassian Confluence](https://www.atlassian.com/software/confluence). This could be beneficially if you're already using Confluence in your organization for collaboration. As organising common spaces for real-life collaboration is an essential part of this, Seatsurfing is also available as a Confluence App.

Using the Confluence App requires the Seatsurfing backend to be up and running. It's not a replacement for it, but an additional frontend for the Booking Site.

## Confluence Cloud

Get the App from the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1224242/?hosting=cloud).

After having installed the App in your Confluence instance, click 'Configure' within the Seatsurfing App panel under 'Manage apps'. You'll need to specify the following settings here:

- Backend URL: The URL of your Seatsurfing instance. Leave empty if you use Cloud hosting.
- Instance ID: The unique identifier of your Seatsurfing instance. To find this, log in to Seatsurfing's <a href="https://app.seatsurfing.io/admin/" target="_blank">Admin interface</a>, go to 'Settings' and copy the Instance ID.
- Shared Secret: A self-chosen shared secret which is set both here and in your Seatsurfing's instance Admin interface. To set this, log in to Seatsurfing's <a href="https://app.seatsurfing.io/admin/" target="_blank">Admin interface</a> and go to 'Settings'.

To integrate the Seatsurfing App, insert the Seatsurfing macro into a Confluence page.

When using the Seatsurfing App for Confluence, users will be assigned a somewhat cryptic email address like confluence-&lt;username&gt;@&lt;seatsurfing-defaultdomain&gt;. This is due to the fact the the actual email address cannot be consumed by the App. If required, users can merge these accounts with their actual Seatsurfing accounts by clicking the Merge Icon in the upper right corner.

## Confluence Data Center

Get the App from the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1224242/?hosting=datacenter).

After having installed the App in your Confluence instance, navigate to your Confluence configuration (gear icon in the upper right) and click 'Seatsurfing Configuration'. You'll need to specify the following settings here:

- Backend URL: The URL of your Seatsurfing instance. Leave empty if you use Cloud hosting.
- Instance ID: The unique identifier of your Seatsurfing instance. To find this, log in to Seatsurfing's <a href="https://app.seatsurfing.io/admin/" target="_blank">Admin interface</a>, go to 'Settings' and copy the Instance ID.
- Shared Secret: A self-chosen shared secret which is set both here and in your Seatsurfing's instance Admin interface. To set this, log in to Seatsurfing's <a href="https://app.seatsurfing.io/admin/" target="_blank">Admin interface</a> and go to 'Settings'.

To integrate the Seatsurfing App, insert the Seatsurfing macro into a Confluence page.

If available, users are identified by their email address. If a user's email address in Confluence is the same as a user's email address in Seatsurfing, it is handled as the same user account. If not, it's possible to manually merge a user account created via Confluence with a "regular" Seatsurfing account. Users can do this by clicking the Merge Icon in the upper right corner.
