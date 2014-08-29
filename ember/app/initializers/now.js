import Ember from 'ember';

var setNow = function () {
  this.set('now', moment());
};

export default {
  name: 'now',

  initialize: function(container, app) {
    setNow.call(app);
    Ember.run.later(app, setNow, 2000);
  }
};
