# Microsoft Azure

You can connect your Microsoft Azure Tenant as an Auth Provider for Seatsurfing.

## 1. Configure your Azure Tenant
1. Log in to the [Microsoft Azure Portal](https://portal.azure.com/).
1. Navigate to "App registrations".
1. Create a new application with supported account type "Accounts in this organizational directory only (Default Directory only - Single tenant)"
1. Copy the Application (client) ID.
1. Navigate to "Certificates & secrets", create a new Client secret and copy the Secret Value (*not* the ID).
1. Navigate to "API permissions", click "Add permission", choose "Microsoft Graph", select "Delegated". Then search and add the required permissions:
    * ```email```
    * ```User.Read```

## 2. Configure Seatsurfing

1. Log in to Seatsurfing's Administrator UI.
1. Navigate to Settings and add a new Auth Provider.
1. Select the Microsoft template.
1. Paste the Application (client) ID into the "Client ID" field.
1. Paste the Secret Value into the "Client Secret" field.
1. Save the Auth Provider.
1. Copy the Callback URL which is displayed right after saving.

## 3. Finish Azure Configuration

1. Head back to the App Registration you've created in the Azure Portal in Step 1.
1. Navigate to "Authentication" and add the copied Callback URL from Step 2 as a Web Redirect URI (i.e. ```https://app.seatsurfing.app/auth/xyz/callback```).