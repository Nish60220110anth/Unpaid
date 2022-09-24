# UDP Client in backend - Test powershell
# Act as server

$client = New-Object net.sockets.udpclient(0)
$ipep = new-object net.ipendpoint([net.ipaddress]::any, 0)
$receive = $client.receive([ref]$ipep)

Write-Output ([text.encoding]::ascii.getstring($receive))