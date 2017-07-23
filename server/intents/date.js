const moment = require('moment-timezone');

const {
  pluralize,
  getTZ,
  getLocation,
  fetchTZ
} = require('../util').helpers;

module.exports = {

  "date.between": (pars, tz) => {
    // ex: how many days between today and New Year
    const date1 = moment(pars['date-1']);
    const date2 = moment(pars['date-2']);
    const unit = pars.unit;
    const diff = Math.abs(date1.diff(date2, unit));

    return `There are ${pluralize(diff, unit)} between ` + date1.format('MMMM Do YYYY') + ' and ' + date2.format('MMMM Do YYYY');
  },

  "date.check": (pars, tz) => {
    // ex: is it New Year in Korea
    // ex: is it the 21st of February
    const { location } = pars;
    const utz = getTZ(tz);

    return fetchTZ(location, utz)
      .then(tz => {
        const date = moment.tz(pars.date, tz);
        const now = moment.tz(tz);

        return now.format("MM-DD-YYYY") === date.format("MM-DD-YYYY")
          ? `Yes, it's ${now.format("MMMM Do YYYY")}
            ${location ? 'in ' + getLocation(location) : ''}
            `
          : `No, it's ${now.format("MMMM Do YYYY")}
            ${location ? 'in ' + getLocation(location) : ''}
            `;
      });
  },

  "date.day_of_week": (pars, tz) => {
    // ex: what day of the week is it today in London
    const { location } = pars;
    const date = pars['date-time'];
    const utz = getTZ(tz);

    return fetchTZ(location, utz)
      .then(tz => {
        const nowUTC = moment.tz(utz).utc();
        const dt = (date
            ? moment.utc(date)
                .hour(nowUTC.hour())
                .minute(nowUTC.minute())
                .second(nowUTC.second())
            : moment
          ).tz(utz);

        return 'It\'s ' + dt.tz(tz).format('dddd');
      });
  },

  "date.day_of_week.check": (pars, tz) => {
    // ex: is it Friday tomorrow in Moscow
    const { dayofweek, location, date } = pars;
    const utz = getTZ(tz);

    return fetchTZ(location, utz)
      .then(tz => {
        const nowUTC = moment.tz(utz).utc();
        const dt = (date
            ? moment.utc(date)
                .hour(nowUTC.hour())
                .minute(nowUTC.minute())
                .second(nowUTC.second())
            : moment
          ).tz(utz);

        const realDayOfWeek = dt.tz(tz).format('dddd');

        return dayofweek === realDayOfWeek
            ? `
              Yes, it's
              ${realDayOfWeek}
              `
            : `No, it's ${realDayOfWeek}`
      })
  },

  "date.get": (pars, tz) => {
    // ex: what date is tomorrow
    const { date } = pars;
    console.log(pars);
    const nowUTC = moment.tz(tz).utc();
    const dt = (date
        ? moment.utc(date)
            .hour(nowUTC.hour())
            .minute(nowUTC.minute())
            .second(nowUTC.second())
        : moment
      ).tz(tz);

    return dt.format('MMMM Do YYYY');
  },

  "date.month.check": (pars, tz) => {
    // ex: do you know if it's March now
    const [start, end] = pars['date-period'].split("/");
    const now = moment();
    const month = +moment(start).format('M');

    return +now.format('M') === month
      ? 'Yes, it\'s ' + now.format('MMMM')
      : 'No, it\'s ' + now.format('MMMM');
  },

  // ex: I'd like to know what month is it now
  "date.month.get": (pars, tz) =>'It\'s ' + moment().format('MMMM'),

  "date.since": (pars, tz) => {
    // ex: how do I know how many minutes passed since the year 2013
    const date = pars.date;
    const unit = pars.unit || 'hour';
    const dt = moment.tz(date, tz);

    // const [yr, mo, day] = date.split("-");
    // if (yr) dt.year(yr);
    // if (mo) dt.month(mo - 1);
    // if (day) dt.date(day);

    const now = moment.tz(tz);
    const diff = Math.abs(now.diff(dt, unit));

    return `${pluralize(diff, unit)} since ` + dt.format('MMMM Do YYYY');
  },

  "date.until": (pars, tz) => {
    // ex: how many months till New Year
    const now = moment();
    const date = moment(pars['date']);
    const unit = pars.unit || 'hour';
    const diff = Math.abs(now.diff(date, unit));

    return `${pluralize(diff, unit)} until ${date.format('MMMM Do YYYY')}`;
  },

  "date.year.check": (pars, tz) => {
    // ex: now it's 1989 year right
    const [start, end] = pars['date-period'].split("/");
    const now = moment();
    const year = +moment(start).format('YYYY');

    return +now.format('YYYY') === year
      ? 'Yes, it\'s ' + now.format('YYYY')
      : 'No, it\'s ' + now.format('YYYY');
  },

  // ex: I wonder which year are we in
  "date.year.get": (pars, tz) => 'The current year is ' + moment().format('YYYY'),
};
