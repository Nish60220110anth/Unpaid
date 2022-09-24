# UDP Test as Client
# Client sents data
# Backend Client act as client to kafka producer
# So i must act as server

$client = New-Object net.sockets.udpclient(0)

$clientIP = Read-Host "IP address ?"
$clientPort = Read-Host "Port ?"

$send = [text.encoding]::ascii.getbytes("sample test message")
[void] $client.send($send, $send.length, $clientIP, $clientPort)
Write-Host "Message Sent"

$client.close()