```bash
cd infrastructure
#docker build --tag microsoft365dsc:1.22.202.1-00 .
docker build --tag pnp-powershell:1.9.0-00 .
cd ..
```

Conscent:


```bash
docker run --rm --env MS365_TENANT_NAME=$MS365_TENANT_NAME pnp-powershell:1.9.0-00 pwsh -c "Connect-PnPOnline -Url https://\$env:MS365_TENANT_NAME.sharepoint.com -DeviceLogin"
```

```powershell
docker run --rm --env MS365_TENANT_NAME=$env:MS365_TENANT_NAME pnp-powershell:1.9.0-00 pwsh -c "Connect-PnPOnline -Url https://`$env:MS365_TENANT_NAME.sharepoint.com -DeviceLogin"
```


```bash
docker run --rm -v ${PWD}:/home --env MS365_ADMIN_ACCOUNT_NAME=$MS365_ADMIN_ACCOUNT_NAME --env MS365_ADMIN_PASSWORD=$MS365_ADMIN_PASSWORD --env MS365_TENANT_NAME=$MS365_TENANT_NAME pnp-powershell:1.9.0-00 pwsh -c "./home/infrastructure/MS365TenantConfiguration.ps1"
```

```powershell
docker run --rm -v ${PWD}:/home --env MS365_ADMIN_ACCOUNT_NAME=$env:MS365_ADMIN_ACCOUNT_NAME --env MS365_ADMIN_PASSWORD=$env:MS365_ADMIN_PASSWORD --env MS365_TENANT_NAME=$env:MS365_TENANT_NAME pnp-powershell:1.9.0-00 pwsh -c "./home/infrastructure/MS365TenantConfiguration.ps1"
```
