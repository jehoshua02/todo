import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoENV.locationType
});

Router.map(function() {
  this.resource('tasks', {path: '/'}, function () {
    this.route('dashboard', {path: '/'});
    this.route('due');
    this.route('past-due');
    this.route('due-today');
    this.route('due-tomorrow');
    this.route('due-this-week');
    this.route('due-next-week');
    this.route('due-this-month');
  });
});

export default Router;
