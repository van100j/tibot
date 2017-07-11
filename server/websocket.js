const server = require('./');
const doIntent = require('./intents');
const WebSocket = require('ws');
const apiai = require("apiai")(process.env.APIAI_CLIENT_TOKEN);
const uuidv4 = require('uuid/v4');
const util = require('util')

const wss = new WebSocket.Server({server: server});

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    try {
      const input = JSON.parse(msg);

      if (input.type === 'user' && input.msg) {
        const sessionId = input.sessionId || uuidv4();

        callApiAi(input.msg, sessionId)
          .then((response) => {
            const { parameters, action, fulfillment } = response.result;
            const output = doIntent(action, parameters);

            if (output) {
              return ws.send(JSON.stringify({type: 'bot', msg: output}));
            } else if (fulfillment.speech) {
              return ws.send(JSON.stringify({type: 'bot', msg: fulfillment.speech}));
            }

            throw new Error('Can\'t understand that');
          })
          .catch(error =>
            ws.send(JSON.stringify({type: 'bot', msg: 'Didn\'t quite get that?'}))
          );
      }
    } catch (err) {
      // TODO: handle JSON.parse error
      ws.send(JSON.stringify({type: 'bot', msg: 'Didn\'t quite get that?'}))
    }
  });

  // TODO: generate ws session ids w/ uuid or sth.
  ws.send(JSON.stringify({type: 'sessionId', msg: uuidv4()}));
  // ws.send(JSON.stringify({type: 'bot', msg: 'Hi there!'}));
  ws.send(JSON.stringify({type: 'bot', msg: '⏰  I\'m a date bot — ask me something about date!'}));
});

function callApiAi(text, sessionId) {
  return new Promise((resolve, reject) => {
    try {
      // TODO: generate ws session ids w/ uuid or sth.
      const request = apiai.textRequest(text, { sessionId: sessionId });

      request.on('response', response => resolve(response));
      request.on('error', error => reject(error));
      request.end();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = wss;
