const moment = require('moment');

const daysOfWeekByDay = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6
};

const daysOfWeekByIndex = Object.keys(daysOfWeekByDay)
  .reduce((acc, d, ix) => {
    acc[ix] = d;
    return acc;
  }, {});

const plural = (num, unit) => num + ' ' + unit + (+num !== 1 ? 's' : '');

module.exports = {
  "date.between": (pars) => {
    const date1 = moment(pars['date-1']);
    const date2 = moment(pars['date-2']);
    const unit = pars.unit;
    const diff = Math.abs(date1.diff(date2, unit));

    return `There are ${plural(diff, unit)} between ` + date1.format('MMMM Do YYYY') + ' and ' + date2.format('MMMM Do YYYY');
  },
  "date.check": (pars) => {
    const { location } = pars;
    const date = moment(pars.date);
    const now = moment();

    return now.format("MM-DD-YYYY") === date.format("MM-DD-YYYY")
      ? 'Yes' : 'No';
  },
  "date.day_of_week": (pars) => {
    const { date, location } = pars;

    return daysOfWeekByIndex[moment(date).format('e')];
  },
  "date.day_of_week.check": (pars) => {
    const { dayofweek, location } = pars;
    const date = moment(pars.date);
    const realDayOfWeek = date.format('e');

    return +daysOfWeekByDay[dayofweek] === +realDayOfWeek
      ? `Yes, it's ${daysOfWeekByIndex[realDayOfWeek]}`
      : `No, it's ${daysOfWeekByIndex[realDayOfWeek]}`;
  },
  "date.get": (pars) => {
    const date = pars.date ? moment(date) : moment();

    return date.format('MMMM Do YYYY');
  },
  "date.month.check": (pars) => {
    const [start, end] = pars['date-period'].split("/");
    const now = moment();
    const month = +moment(start).format('M');

    return +now.format('M') === month
      ? 'Yes, it\'s ' + now.format('MMMM')
      : 'No, it\'s ' + now.format('MMMM');
  },
  "date.month.get": () =>'It\'s ' + moment().format('MMMM'),
  "date.since": (pars) => {
    const { unit } = pars;
    const date = moment(pars.date);
    const now = moment();
    const diff = Math.abs(now.diff(date, unit));

    return `${plural(diff, unit)} since ` + date.format('MMMM Do YYYY');
  },
  "date.until": (pars) => {
    const now = moment();
    const date = moment(pars['date']);
    const unit = pars.unit;
    const diff = Math.abs(now.diff(date, unit));

    return `${plural(diff, unit)} until ${date.format('MMMM Do YYYY')}`;
  },
  "date.year.check": (pars) => {
    const [start, end] = pars['date-period'].split("/");
    const now = moment();
    const year = +moment(start).format('YYYY');

    return +now.format('YYYY') === year
      ? 'Yes, it\'s ' + now.format('YYYY')
      : 'No, it\'s ' + now.format('YYYY');
  },
  "date.year.get": () => 'The current year is ' + moment().format('YYYY'),
};
