import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['baseClassName'],
  baseClassName: 'small-box',
  loadingIcon: 'refresh',
  currentIcon: Ember.computed('loading', function() {
    if (this.get('loading')) {
      return this.get('loadingIcon');
    } else {
      return this.get('icon');
    }
  }),
  currentValue: Ember.computed('loading', function() {
    if (this.get('loading')) {
      return '?';
    } else {
      return this.get('value');
    }
  })
});
