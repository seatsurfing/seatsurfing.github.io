# Microsoft Azure

You can connect your Microsoft Azure Tenant as an Auth Provider for Seatsurfing.

## 1. Configure your Azure Tenant

1. Log in to the [Microsoft Azure Portal](https://portal.azure.com/).
1. Navigate to "App registrations".
1. Create a new registration. Select supported account type "Accounts in this organizational directory only (_&lt;YOUR TENANT&gt;_ only - Single tenant)" to restrict login access to users within your tenant only.
1. Copy the Application (client) ID.
1. Navigate to "Certificates & secrets", create a new Client secret and copy the Secret Value (_not_ the ID).
1. Navigate to "API permissions", click "Add permission", choose "Microsoft Graph", select "Delegated permissions". Then search and add the required permissions:
   - `email`
   - `User.Read`

## 2. Configure Seatsurfing

1. Log in to Seatsurfing's Administrator UI.
1. Navigate to Settings and add a new Auth Provider.
1. Select the Microsoft template.
1. Paste the Application (client) ID into the "Client ID" field.
1. Paste the Secret Value into the "Client Secret" field.
1. Replace the path `/common/` in "Auth URL", "Token URL", and "Logout URL" with `/<YOUR TENANT'S NAME OR ID>/`. _Skip this step, if the account type in Step 1 was set to "Accounts in any organizational directory"_.
1. Save the Auth Provider.
1. Copy the "Callback URL" which is displayed right after saving.

## 3. Finish Azure Configuration

1. Head back to the App Registration you've created in the Azure Portal in Step 1.
1. Navigate to "Authentication" and add a new "Platform configuration" (type "Web application > Web") and use the "Callback URL" from Step 2 as a "Redirect URI" (i.e. `https://<YOUR SEATSURFING DOMAIN>/auth/xyz/callback`).
