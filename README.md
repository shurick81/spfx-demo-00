# personal-assistance

## Using Docker

```bash
docker run --rm -it -v $(pwd):/usr/app/spfx -p 4321:4321 -p 35729:35729 m365pnp/spfx:1.13.1
```

```PowerShell
docker run --rm -it -v ${pwd}:/usr/app/spfx -p 4321:4321 -p 35729:35729 m365pnp/spfx:1.13.1
```

Run inside container:

```bash
gulp trust-dev-cert
gulp serve --nobrowser
```

Run in PS on the host where you run browser:

```PowerShell
$tcpClient = New-Object -TypeName System.Net.Sockets.TcpClient;
$tcpClient.Connect("localhost", 4321);
$tcpStream = $tcpClient.GetStream();
$callback = { param($sender, $cert, $chain, $errors) return $true };
$sslStream = New-Object -TypeName System.Net.Security.SslStream -ArgumentList @($tcpStream, $true, $callback);
$sslStream.AuthenticateAsClient('');
$certificate = $SslStream.RemoteCertificate;
$x509Certificate = New-Object -TypeName System.Security.Cryptography.X509Certificates.X509Certificate2 -ArgumentList $certificate
$store = new-object System.Security.Cryptography.X509Certificates.X509Store(
    [System.Security.Cryptography.X509Certificates.StoreName]::Root,
    "currentuser"
)
$store.open("MaxAllowed");
$store.add($x509Certificate);
$store.close();
```