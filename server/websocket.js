const server = require("./");
const processRequest = require("./intents");
const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");

const wss = new WebSocket.Server({ server: server });

wss.on("connection", (ws) => {
  ws.on("message", async (msg) => {
    try {
      const answer = await processRequest(msg);
      ws.send(JSON.stringify({ type: "bot", msg: answer }));
    } catch (err) {
      console.error(err);
    }
  });

  // Generate sessionId
  ws.send(JSON.stringify({type: 'sessionId', msg: uuidv4()}));
});

module.exports = wss;
