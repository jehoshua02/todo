import Ember from 'ember';

var config = {
  updateInterval: TodoENV.now.updateInterval,
  allowOverride: TodoENV.now.allowOverride,
  override: TodoENV.now.override
};

var setNow = function () {
  var override = this.get('nowOverride') || config.override;
  var isOverride = (config.allowOverride && override);
  var now = isOverride ? moment(override) : moment();

  // set time
  this.set('now', now);

  // schedule to run again if no override
  if (!isOverride) {
    Ember.run.later(this, setNow, config.updateInterval);
  }
};

export default {
  name: 'now',

  initialize: function(container, app) {
    setNow.call(app);
  }
};
