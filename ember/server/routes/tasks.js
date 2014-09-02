var moment = require('moment');
moment.locale('en', {
  week: {
    dow: 1
  }
});

var config = {
  now: '2014-08-27',
  generate: [
    // tasks with due dates: 15
    'pastDue', // 3
    'dueToday', // 2
    'dueTomorrow', // 2
    'dueThisWeek', // 9
    'dueNextWeek', // 3
    'dueThisMonth', // 10
    'dueNextMonth' // 5
  ]
};

var now = function () {
  return moment(config.now);
};

var generate = {};

generate.tasks = function () {
  var id = 0;
  var tasks = [];
  var functions = config.generate;
  for (var i = 0; i < functions.length; i++) {
    tasks.push.apply(tasks, this[functions[i]]());
  }
  tasks.map(function (task) {
    task.id = id++;
  });
  return tasks;
};

generate.pastDue = function () {
  return [
    { title: 'Task due last week. (Monday is 1st day of week.)', due: now().startOf('week').subtract(1, 'days') },
    { title: 'Task due first day of week.', due: now().startOf('week') },
    { title: 'Task due end of yesterday.', due: now().subtract(1, 'day').endOf('day') }
  ];
};

generate.dueToday = function () {
  return [
    { title: 'Task due start of today.', due: now().startOf('day') },
    { title: 'Task due end of day.', due: now().endOf('day') }
  ];
};

generate.dueTomorrow = function () {
  return [
    { title: 'Task due start of tomorrow.', due: now().add(1, 'days').startOf('day') },
    { title: 'Task due end of tomorrow.', due: now().add(1, 'days').endOf('day') }
  ];
};

generate.dueThisWeek = function () {
  return [
    { title: 'Task due start of day after tomorrow.', due: now().add(2, 'days').startOf('day') },
    { title: 'Task due end of week.', due: now().endOf('week') }
  ];
};

generate.dueNextWeek = function () {
  return [
    { title: 'Task due start of next week.', due: now().add(1, 'weeks').startOf('week') },
    { title: 'Task due end of next week.', due: now().add(1, 'weeks').endOf('week') }
  ];
};

generate.dueThisMonth = function () {
  return [
    { title: 'Task due start of week after next week.', due: now().add(2, 'weeks').startOf('week') },
    { title: 'Task due end of month.', due: now().endOf('month') }
  ];
};

generate.dueNextMonth = function () {
  return [
    { title: 'Task due start of next month.', due: now().add(1, 'months').startOf('month') },
    { title: 'Task due end of next month.', due: now().add(1, 'months').endOf('month') }
  ];
};


module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();

  tasksRouter.get('/', function(req, res) {
    res.send({
      tasks: generate.tasks()
    });
  });
  app.use('/api/tasks', tasksRouter);
};
