import Ember from 'ember';
import TasksController from 'todo/controllers/tasks';

export default TasksController.extend({
  due: Ember.computed.filterBy('model', 'hasDueDate'),
  pastDue: Ember.computed.filterBy('model', 'isPastDue'),
  dueToday: Ember.computed.filterBy('model', 'isDueToday'),
  dueTomorrow: Ember.computed.filterBy('model', 'isDueTomorrow'),
  dueThisWeek: Ember.computed.filterBy('model', 'isDueThisWeek'),
  dueNextWeek: Ember.computed.filterBy('model', 'isDueNextWeek'),
  dueThisMonth: Ember.computed.filterBy('model', 'isDueThisMonth'),
  dueNextMonth: Ember.computed.filterBy('model', 'isDueNextMonth')
});
