$securedPassword = ConvertTo-SecureString $env:MS365_ADMIN_PASSWORD -AsPlainText -Force;
$adminAccountCredential = New-Object System.Management.Automation.PSCredential( $env:MS365_ADMIN_ACCOUNT_NAME, $securedPassword );
Connect-PnPOnline -Url https://$env:MS365_TENANT_NAME-admin.sharepoint.com -Credentials $adminAccountCredential;
New-PnPSite -Type CommunicationSite -Title Home -Url https://$env:MS365_TENANT_NAME.sharepoint.com/sites/home;
Set-PnPHomeSite -HomeSiteUrl https://$env:MS365_TENANT_NAME.sharepoint.com/sites/home;