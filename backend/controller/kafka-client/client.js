const dgram = require('node:dgram');
const dotenv = require('dotenv')


dotenv.config()

const REMOTE_PORT = process.env.UDP_CLIENT_REMOTE_PORT;
const REMOTE_ADDRESS = process.env.UDP_CLIENT_REMOTE_ADDRESS;

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
	console.log(`server error:\n${err.stack}`);
	server.close();
});

// Error must be must returned 
const trySendMessage = (msg) => {
	let error ; 
	server.send(msg, REMOTE_PORT, REMOTE_ADDRESS,(err,count)=>{
		if(err) {
			error = err; 
		}else{
			console.log(`SUCCESS : Message send of length ${count}`);
		}
	});
	return error
}

const sendMessage = (msg) => {
	server.send(msg, REMOTE_PORT, REMOTE_ADDRESS,(err,count)=>{
		if (err) {
			console.log(`ERROR : ${err}`);
		} else {
			console.log(`SUCCESS : Message send of length ${count}`);
		}
	});
}

const closeConnection = (closeCallback) => {
	server.close(closeCallback)
}

module.exports = {trySendMessage , sendMessage , closeConnection}

