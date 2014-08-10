module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();
  var moment = require('moment');
  var now = moment().endOf('day');
  tasksRouter.get('/', function(req, res) {
    res.send({tasks:[
      {id: 1, title: 'buy bananas', due: now.clone().subtract(3, 'days')}, // past due
      {id: 2, title: 'peel banana', due: now.clone().subtract(2, 'days')}, // past due
      {id: 3, title: 'eat banana', due: now.clone()}, // due today
      {id: 4, title: 'throw away banana peel', due: now.clone().add(1, 'days')}, // due tomorrow
      {id: 5, title: 'peel another banana', due: now.clone().add(1, 'days')}, // due tomorrow
      {id: 6, title: 'eat another banana', due: now.clone().add(3, 'days')}, // due this week - lower boundary
      {id: 7, title: 'throw away another banana peel', due: now.clone().add(4, 'days')}, // due this week
      {id: 8, title: 'peel another banana', due: now.clone().add(5, 'days')}, // due this week
      {id: 9, title: 'eat another banana', due: now.clone().add(6, 'days')}, // due this week - upper boundary
      {id: 10, title: 'throw away another banana peel', due: now.clone().add(7, 'days')}, // due next week - lower boundary
      {id: 11, title: 'peel another banana', due: now.clone().add(13, 'days')}, // due next week - upper boundary
      {id: 12, title: 'eat another banana', due: now.clone().add(14, 'days')}, // due this month - lower boundary
      {id: 13, title: 'throw away another banana peel', due: now.clone().add(1, 'months').subtract(1, 'days')}, // due this month - upper boundary
      {id: 14, title: 'peel another banana', due: now.clone().add(1, 'months')}, // not counted
      {id: 15, title: 'eat another banana', due: now.clone().add(1, 'months')}, // not counted
      {id: 16, title: 'throw away another banana peel', due: now.clone().add(1, 'months')}, // not counted
    ]});
  });
  app.use('/api/tasks', tasksRouter);
};
