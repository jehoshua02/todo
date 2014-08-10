import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function() {
    this.setNow();
  },

  setNow: function() {
    var controller = this.get('controller');
    controller.set('now', moment());
    Ember.run.later(this, this.setNow, 2000);
  }

});
