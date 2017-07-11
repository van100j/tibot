const date = require('./date');

// merge all intent actions
const intents = Object.assign({}, date);

function doIntent(action, pars) {
  const unrecognizedActionMsg = 'I don\t understand that. Can you try again?';

  return intents[action]
    ? intents[action](pars)
    : null;
}

module.exports = doIntent;
