import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr('string'),
  due: DS.attr('date'),

  momentDue: function () {
    return moment(this.get('due'));
  }.property('due')
});
