const moment = require('moment-timezone');
const timezone = require('./google_api');

// Pluralize a unit
const pluralize = (num, unit) => num + ' ' + unit + (+num !== 1 ? 's' : '');

// Fallback for timezones
const getTZ = (tz) => !!moment.tz.zone(tz) ? tz : moment.tz.guess();

// Location string out of location object {city: ..., country: ...} -> "City, Country"
const getLocation = (location) =>
  ['city', 'country']
    .map(ent => location[ent] ? location[ent] : '')
    .filter(el => !!el)
    .join(", ");

// Fetch timezone from Google's Timezone API, or fallback to the user's TZ
const fetchTZ = (location, fallbackTZ) => new Promise((resolve) => {
  if (!location) return resolve(getTZ(fallbackTZ));

  // get only city and/or country
  const validLoc = getLocation(location);

  timezone(validLoc)
    .then(tz => resolve(tz))
    .catch(err => resolve(getTZ(tz)));
});

module.exports = {
  pluralize,
  getTZ,
  getLocation,
  fetchTZ
};
