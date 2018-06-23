'use strict'

const {Server: WebSocketServer} = require('uws')
const wss = new WebSocketServer({port: 3000})

function onMessage(message) {
	console.log('--> echo')
	this.send(message)
}

function onConnection(ws) {
	console.log('--> connected')
	ws.on('message', onMessage)
}

function onError(error) {
	console.error('--> cannot start server', error)
}

wss
	.on('connection', onConnection)
	.on('error', onError)
