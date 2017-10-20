import Ember from 'ember';

export default Ember.Component.extend({
  status: 'primary',
  tagName: 'span',
  classNames: ['label'],
  classNameBindings: ['statusClass'],
  statusClass: Ember.computed('status', function() {
    let status = this.get('status');
    return `label-${status}`;
  })
});
