// Router specific

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>
const udpclient = require('./kafka-client/client');

const debugChalk = (msg) => {
	return msg;
}

const errorChalk = (msg) => {
	return msg;
}

function RDebugText(fileName, reqType, routerName) {
	let msg = debugChalk(`R-DEBUG : ${fileName} ${reqType} ${routerName}`);
	udpclient.sendMessage(msg)
}

function RErrorText(fileName, error, routerName) {
	let msg = errorChalk(`R-ERROR : ${fileName} ${error} ${routerName}`);
	udpclient.sendMessage(msg)
}

// Event Specific

// DEBUG FORMAT
// <FILE_NAME> <STATUS> <MESSAGE> <OUTPUT>

// For event specific  debug 
function DebugStream(fileName, status, moreInfo, output) {
	let msg = debugChalk(`DEBUG : ${fileName} ${status} ${moreInfo} ${output}`);
	udpclient.sendMessage(msg)
}

// ERROR FORMAT
// <FILE_NAME> <TYPE_OF_ERROR> <MORE_INFO> <ROUTER_NAME> 
function ErrorStream(fileName, typeErr, errExtra, output) {
	let msg = errorChalk(`ERROR : ${fileName} ${typeErr} ${errExtra} ${output}`);
	udpclient.sendMessage(msg)
}

// Default Configuration of ROUTER's opening collection's
const ROUTER_DEFAULTS = {
	strict: true
}

module.exports = { RErrorText, RDebugText, ErrorStream, DebugStream, ROUTER_DEFAULTS };