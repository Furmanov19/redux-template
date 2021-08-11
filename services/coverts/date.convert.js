import moment from 'moment';

const dateFormat = 'MM/DD/YYYY';
const dateFormatDatabase = 'YYYY-MM-DD';

export function srtDateToDatabaseFormat(dateString) {
  return moment(dateString)
    .format(dateFormatDatabase)
    .toString();
}

export function srtDateToDateFormat(dateString) {
  return moment(dateString)
    .format(dateFormat)
    .toString();
}

export const daysFromNow = (date, format) => {
  const then = moment(
    date,
    format === 'database' ? dateFormatDatabase : dateFormat
  ).startOf('day');
  const now = moment().startOf('day');

  return moment(then).diff(now, 'days');
};

export const getToday = () => {
  const today = moment()
    .startOf('day')
    .format(dateFormatDatabase);

  return today;
};

export const diffNowDate = date => {
  const then = moment(date, dateFormatDatabase).startOf('day');
  const now = moment().startOf('day');

  return moment(then).diff(now, 'days');
};

export function getHumanizedTime(timeThen) {
  const now = moment();

  const then = moment(timeThen);

  const duration = moment.duration(now.diff(then)).humanize();

  return `${duration} ago`;
}
