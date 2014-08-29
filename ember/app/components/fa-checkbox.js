import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['fa-checkbox'],
  click: function () {
    this.sendAction('action', this.get('task'));
  }
});
