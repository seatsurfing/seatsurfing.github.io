# Google Cloud

You can connect your Google Cloud Platform as an Auth Provider for Seatsurfing.

## 1. Configure your Google Cloud Platform Account

1. Log in to the [Google Cloud Console](https://console.cloud.google.com/).
1. Navigate to "APIs and services".
1. Click "Create credentials" and choose "OAuth client ID".
1. Create a new client ID with Application Type "Web application" and save it.
1. Copy the Client ID and the Client Secret.

## 2. Configure Seatsurfing

1. Log in to Seatsurfing's Administrator UI.
1. Navigate to Settings and add a new Auth Provider.
1. Select the Google template.
1. Paste the Client ID into the "Client ID" field.
1. Paste the Secret ID into the "Client Secret" field.
1. Save the Auth Provider.
1. Copy the Callback URL which is displayed right after saving.

## 3. Finish Google Cloud Configuration

1. Head back to the OAuth Client you've created in the Google Cloud Console in Step 1.
1. Click "Add URI" under "Authorised redirect URIs" and add the copied Callback URL from Step 2 as a Web Redirect URI (i.e. `https://<YOUR SEATSURFING DOMAIN>/auth/<YOUR UUID>/callback`).
