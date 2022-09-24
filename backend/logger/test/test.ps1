# Powershell code to test the backend client UDP functionality 
<#
.SYNOPSIS
	Receives data from the any UDP clients and print to the console
.DESCRIPTION
	This function is used to get the data from any client using UDP protocol and log's 
	it in console.It is created to test the acting client in the backend which 
	communicates with the kafka producer using UDP protocol.
.NOTES
	This function is only tested in windows-powershell core (for other OS , please refer powershell docs)
.EXAMPLE
	Test-UDPClient_Server -Verbose
	Explanation of the function or its result. You can include multiple examples with additional .EXAMPLE lines
#>

{ 0 }
function Test-UDPClient_Server {
	[CmdletBinding()]
	param (

	)
	
	begin {
		$client = New-Object net.sockets.udpclient(0)
		Write-Verbose -Message "UDP Client Created"
		$ipep = new-object net.ipendpoint([net.ipaddress]::any, 3000)
		Write-Verbose -Message "UDP IpEnd Point Created"

		$receive = $client.receive([ref]$ipep)
		Write-Verbose -Message "Got Message ! from "$receive.Address()""
	}
	
	process {
		
	}
	
	end {
		Write-Output ([text.encoding]::ascii.getstring($receive))
		$client.Close();
		Write-Verbose -Message "UDP Connection Closed"
	}
}

# function Test-UDPClient_Client {
# 	[CmdletBinding()]
# 	param (
		
# 	)
	
# 	begin {
		
# 	}
	
# 	process {
		
# 	}
	
# 	end {
		
# 	}
# }