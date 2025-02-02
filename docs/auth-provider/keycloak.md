# Keycloak

You can connect your [Keycloak](https://www.keycloak.org/)-instance as an Auth Provider for Seatsurfing.

## 1. Configure your Keycloak-instance
1. Log in to your instance' administration console.
1. Goto Clients and click Create.
1. Choose a Client-ID, select openid-connect and enter as Root URL the complete URL of your Seatsurfing installation and click Save.
1. Now Change Access Type to confidential.
1. Click Save, in the navigationbar "Keys" will appear.
1. At "Keys" you can copy the secret for the next step.

## 2. Configure Seatsurfing

1. Log in to Seatsurfing's Administrator UI.
1. Navigate to Settings and add a new Auth Provider.
1. Select the Keycloak template.
1. Paste the Client ID you have chosen in keycloak into the "Client ID" field.
1. Paste the Secret Value into the "Client Secret" field.
1. Change all _keycloakhost.sample_ to your hostname and optional _master_ to your realm.
1. Save the Auth Provider.
1. Copy the Callback URL which is displayed right after saving.

## 3. Finish Keycloak Configuration

1. Head back to the Client you've created in the Keycloak admin-console in Step 1.
1. Change Valid Redirect URIs from https://...../* to /auth/xxxxxc/callback
