'use strict'
let DateList = [];

const moment = require('moment')
const Month = require('calendar-months').Month;
const weeks = Month.create(moment(new Date()).format('YYYY-MM')).calendarWeeks();
const valid_day = require('@date/today')

function getAllDates() {
  DateList = [];
  weeks.map(wk => {
    wk.map(data => {
      let yest = false;
      let tomo = false;
      if (moment(data).toDate().getDate() - moment(moment.now()).toDate().getDate() == -1) {
        yest = true;
      }
      if (moment(data).toDate().getDate() - moment(moment.now()).toDate().getDate() == 1) {
        tomo = true;
      }
      DateList.push({
        xDay: moment(data).format('dddd').toUpperCase(),
        nDay: moment(data).format('ddd'),
        Day: moment(data).format('DD'),
        nMonth: moment(data).format('MMM'),
        Month: moment(data).format('MM'),
        Year: moment(data).format('YYYY'),
        moment: moment(data).unix(),
        today: valid_day.isToday(moment(data).toDate()),
        before: valid_day.isBeforeToday(moment(data).toDate()),
        after: valid_day.isAfterToday(moment(data).toDate()),
        tomo: tomo,
        yest: yest
      })
    })
  })

  return DateList;
}

function getDate(moment) {
  let theid = moment;

  const result = DateList.filter(data => data.moment == theid);
  return result;

}

module.exports = {
  getAllDates,
  getDate,
  DateList
}