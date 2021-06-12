const dialogflow = require("@google-cloud/dialogflow");
const { v4: uuidv4 } = require("uuid");
const { value, struct } = require("pb-util");

// include and merge all intents:
const date = require("./date");
const time = require("./time");
const intents = Object.assign({}, date, time);

// GOOGLE Cloud credentials and Dialogflow project id from .env
const {
  GOOGLE_APPLICATION_CREDENTIALS_PKEY,
  GOOGLE_APPLICATION_CREDENTIALS_CLIENT_EMAIL,
  DIALOGFLOW_PROJECT_ID,
} = process.env;

const dialogflowSessionClient = new dialogflow.SessionsClient({
  credentials: {
    private_key: GOOGLE_APPLICATION_CREDENTIALS_PKEY.replace(/\\n/g, '\n'),
    client_email: GOOGLE_APPLICATION_CREDENTIALS_CLIENT_EMAIL,
  },
});

async function dialogflowRequest(text, sessionId) {
  const sessionPath = dialogflowSessionClient.projectAgentSessionPath(
    DIALOGFLOW_PROJECT_ID,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text,
        languageCode: "en-US",
      },
    },
  };

  const [{ queryResult: result }] = await dialogflowSessionClient.detectIntent(
    request
  );

  return result;
}

const parseParameters = ({ fields }) => {
  return Object.keys(fields).reduce((acc, key) => {
    const { kind, structValue } = fields[key];

    acc[key] =
      kind === "structValue"
        ? struct.decode(structValue)
        : value.decode(fields[key]);

    return acc;
  }, {});
};

// Process the action
const doIntent = (result, tz) => {
  const { parameters: pars, action, fulfillmentText: fulfillment } = result;
  const parameters = parseParameters(pars);

  return new Promise((resolve, reject) => {
    if (intents[action]) {
      return resolve(intents[action](parameters, tz));
    } else if (fulfillment) {
      return resolve(fulfillment);
    }
    return reject(handleUnknownAnswer());
  });
};

const handleUnknownAnswer = (err) => {
  console.error(err);
  const msgs = [
    "Didn't quite catch what you said?",
    "Donno",
    "Can you try again?",
    "Sorry, can't help you with that?",
  ];

  return msgs[~~(Math.random() * msgs.length)];
};

const processRequest = (payload) =>
  new Promise((resolve, reject) => {
    // try/catch to make sure we don't crush on invalid JSON msgs
    try {
      const input = JSON.parse(payload);
      const { type, tz, msg, sessionId = uuidv4() } = input

      // process our users' request only
      if (type === "user" && msg) {
        dialogflowRequest(msg, sessionId)
          .then((response) => doIntent(response, tz))
          .then((answer) => resolve(answer))
          .catch((err) => resolve(handleUnknownAnswer(err)));
      }
    } catch (err) {
      resolve(handleUnknownAnswer(err));
    }
  });

module.exports = processRequest;
