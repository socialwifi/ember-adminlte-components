import Ember from 'ember';

export default Ember.Component.extend({
  isNull: Ember.computed('label', function() {
    let label = this.attrs.label.value;
    return Boolean(label) !== label;
  })
});
