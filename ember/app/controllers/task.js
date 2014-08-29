import Ember from 'ember';

export default Ember.ObjectController.extend({
  due: function () {
    return ('due ' + this.get('momentDue').calendar(Todo.now)).toLowerCase();
  }.property('momentDue', 'Todo.now'),

  done: false,

  actions:  {
    toggleDone: function () {
      console.log('marking ' + this.get('model.title') + ' done!');
      this.toggleProperty('done');
    }
  }
});
