import TasksController from 'todo/controllers/tasks';
export default TasksController.extend({
  needs:['application'],

  counts: {},

  updateCounts: function () {
    var counts = {
      pastDue: 0,
      dueToday: 0,
      dueTomorrow: 0,
      dueThisWeek: 0,
      dueNextWeek: 0,
      dueThisMonth: 0
    };

    this.forEach(function (task) {
      var now = this.get('controllers.application.now');
      var due = task.get('momentDue');

      // past
      if (due.isBefore(now)) {
        counts.pastDue++;
        return;
      }

      // today
      if (due.isSame(now, 'day')) {
        counts.dueToday++;
        return;
      }

      // tomorrow
      var tomorrow = now.clone().add(1, 'days');
      if (due.isSame(tomorrow, 'day')) {
        counts.dueTomorrow++;
        return;
      }

      // this week
      var thisWeekBoundary = now.clone().add(1, 'weeks').subtract(1, 'days').endOf('day');
      if (due.isBefore(thisWeekBoundary)) {
        counts.dueThisWeek++;
        return;
      }

      // next week
      var nextWeekBoundary = now.clone().add(2, 'weeks').subtract(1, 'days').endOf('day');
      if (due.isBefore(nextWeekBoundary)) {
        counts.dueNextWeek++;
        return;
      }

      // this month
      var thisMonthBoundary = now.clone().endOf('month');
      if (due.isBefore(thisMonthBoundary)) {
        counts.dueThisMonth++;
        return;
      }
    }, this);

    this.set('counts', counts);
  }.observes('@each.momentDue', 'controllers.application.now'),

});
