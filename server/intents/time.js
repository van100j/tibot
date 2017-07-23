const moment = require('moment-timezone');

const {
  pluralize,
  getTZ,
  getLocation,
  fetchTZ
} = require('../util').helpers;

module.exports = {

  "time.check": (pars, tz) => {
    // it's 5 o'clock in London
    const { time, location } = pars;
    const utz = getTZ(tz);

    return fetchTZ(location, utz)
      .then(tz => {
        const now = moment.tz(tz);
        const [hh, mm, ss] = time.split(':').map(e => +e);

        return hh === +now.hour()
          ? `
            Yes, it's ${now.format('mm')} minutes past ${now.format('h a')}
            ${location ? ' in ' + getLocation(location) : ''}
            `
          : `
            No, it's ${now.format('h:mm a')}
            ${location ? ' in ' + getLocation(location) : ''}
            `;
      });
  },

  "time.convert": (pars, tz) => {
    // convert Moscow time in Tokyo
    const locationFrom = pars['location-from'];
    const locationTo = pars['location-to'];
    const timeFrom = pars['time-from'];
    const utz = getTZ(tz);

    return Promise.all([fetchTZ(locationFrom, utz), fetchTZ(locationTo, utz)])
      .then(([tzFrom, tzTo]) => {
        const [hh, mm, ss] = (timeFrom ? timeFrom : moment.tz(tzFrom).format('H:m:s'))
          .split(':')
          .map(e => +e);

        const fromDt = moment.tz(tzFrom).hour(hh).minute(mm);
        const toDt = moment.tz(tzFrom).hour(hh).minute(mm).tz(tzTo);

        return `${timeFrom ? 'When it\'s' : 'It\'s'}
          ${fromDt.format('h:mm a')} in ${getLocation(locationFrom)},
          ${timeFrom ? 'it\'s' : 'and'}
          ${toDt.format('h:mm a')} in ${getLocation(locationTo)}
        `;
      });

  },
  "time.get": (pars, tz) => {
    // what time is it
    // what time is it in Mountain View
    const { location } = pars;
    const utz = getTZ(tz);

    return fetchTZ(location, utz)
      .then(tz => {
        const now = moment.tz(tz);

        return `It's ${now.format('h:mm a')} ${location ? 'in ' + getLocation(location) : ''}`;
      });
  },
  "time.time_difference": (pars, tz) => {
    // find time difference Paris Milan
    const location1 = pars['location-1'];
    const location2 = pars['location-2'];
    const utz = getTZ(tz);

    return Promise.all([fetchTZ(location1, utz), fetchTZ(location2, utz)])
      .then(([tz1, tz2]) => {
        const [h1, m1] = moment.tz(tz1).format('Z').split(":").map(e => +e);
        const [h2, m2] = moment.tz(tz2).format('Z').split(":").map(e => +e);
        const hDiff = h2 - h1;
        const mDiff = m2 - m1;

        return `
          ${hDiff > 0 ? getLocation(location2) : getLocation(location1)} is
          ${pluralize(Math.abs(hDiff), 'hour')}
          ${mDiff ? ' and ' + pluralize(Math.abs(mDiff), 'minute') : ''}
          ahead of
          ${hDiff > 0 ? getLocation(location1) : getLocation(location2)}
          `;
      });
  }
};
