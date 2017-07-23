const server = require('./');
const processRequest = require('./intents');
const WebSocket = require('ws');
const uuidv4 = require('uuid/v4');

const wss = new WebSocket.Server({server: server});

wss.on('connection', (ws) => {
  ws.on('message', (msg) =>
    processRequest(msg)
      .then(answer => ws.send(JSON.stringify({type: 'bot', msg: answer})))
  );

  // Generate sessionId
  ws.send(JSON.stringify({type: 'sessionId', msg: uuidv4()}));
});

module.exports = wss;
