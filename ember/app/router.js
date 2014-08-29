import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoENV.locationType
});

Router.map(function() {
  this.resource('tasks', {path: '/tasks'}, function () {
    this.route('dashboard', {path: '/dashboard'});
    this.route('due', {path: '/due/:when'});
  });
  this.route('task', {path: '/tasks/:id'});
});

export default Router;
