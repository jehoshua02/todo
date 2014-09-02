import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr('string'),
  due: DS.attr('date'),

  momentDue: function () {
    return moment(this.get('due'));
  }.property('due'),

  hasDueDate: function () {
    return this.get('due') !== null;
  }.property('due'),

  isPastDue: function () {
    var due = this.get('momentDue');
    return due.isBefore(Todo.now, 'day');
  }.property('momentDue', 'Todo.now'),

  isDueToday: function () {
    var due = this.get('momentDue');
    return due.isSame(Todo.now, 'day');
  }.property('momentDue', 'Todo.now'),

  isDueTomorrow: function () {
    var due = this.get('momentDue');
    var tomorrow = Todo.now.clone().add(1, 'days');
    return due.isSame(tomorrow, 'day');
  }.property('momentDue', 'Todo.now'),

  isDueThisWeek: function () {
    var due = this.get('momentDue');
    var weekStart = Todo.now.clone().startOf('week');
    var weekEnd = Todo.now.clone().endOf('week');
    return due.isBetween(weekStart, weekEnd, 'day');
  }.property('momentDue', 'Todo.now'),

  isDueNextWeek: function () {
    var due = this.get('momentDue');
    var nextWeekStart = Todo.now.clone().startOf('week').add(1, 'weeks');
    var nextWeekEnd = Todo.now.clone().endOf('week').add(1, 'weeks');
    return due.isBetween(nextWeekStart, nextWeekEnd, 'day');
  }.property('momentDue', 'Todo.now'),

  isDueThisMonth: function () {
    var due = this.get('momentDue');
    return due.isSame(Todo.now, 'month');
  }.property('momentDue', 'Todo.now'),

  isDueNextMonth: function () {
    var due = this.get('momentDue');
    var nextMonth = Todo.now.clone().add(1, 'months');
    return due.isSame(nextMonth, 'month');
  }.property('momentDue', 'Todo.now'),

});
