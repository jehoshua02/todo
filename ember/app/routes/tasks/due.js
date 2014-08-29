import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var map = {
      'past': 'isPastDue',
      'today': 'isDueToday',
      'tomorrow': 'isDueTomorrow',
      'this-week': 'isDueThisWeek',
      'next-week': 'isDueNextWeek',
      'this-month': 'isDueThisMonth',
      'next-month': 'isDueNextMonth'
    };
    var when = map[params.when];
    return this.modelFor('tasks').filterBy(when, true);
  }
});
