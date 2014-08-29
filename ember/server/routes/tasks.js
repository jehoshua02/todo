module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();
  var moment = require('moment');
  var now = moment().endOf('day');

  tasksRouter.get('/', function(req, res) {
    res.send({tasks:[
      {id: 1, title: 'buy bananas', due: now.clone().subtract(3, 'days')},
      {id: 2, title: 'peel banana', due: now.clone().subtract(2, 'days')},
      {id: 3, title: 'eat banana', due: now.clone()},
      {id: 4, title: 'throw away banana peel', due: now.clone().add(1, 'days')},
      {id: 5, title: 'peel another banana', due: now.clone().add(1, 'days')},
      {id: 6, title: 'eat another banana', due: now.clone().add(3, 'days')},
      {id: 7, title: 'throw away another banana peel', due: now.clone().add(4, 'days')},
      {id: 8, title: 'peel another banana', due: now.clone().add(5, 'days')},
      {id: 9, title: 'eat another banana', due: now.clone().add(6, 'days')},
      {id: 10, title: 'throw away another banana peel', due: now.clone().add(7, 'days')},
      {id: 11, title: 'peel another banana', due: now.clone().add(13, 'days')},
      {id: 12, title: 'eat another banana', due: now.clone().add(14, 'days')},
      {id: 13, title: 'throw away another banana peel', due: now.clone().add(1, 'months').subtract(1, 'days')},
      {id: 14, title: 'peel another banana', due: now.clone().add(1, 'months')},
      {id: 15, title: 'eat another banana', due: now.clone().add(1, 'months')},
      {id: 16, title: 'throw away another banana peel', due: now.clone().add(1, 'months')},
    ]});
  });
  app.use('/api/tasks', tasksRouter);
};
