import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['largeWidth', 'mediumWidth', 'smallWidth', 'extraSmallWidth'],
  largeWidth: Ember.computed('large', function() {
    return this._getBoostrapClass('lg', this.get('large'));
  }),
  mediumWidth: Ember.computed('medium', function() {
    return this._getBoostrapClass('md', this.get('medium'));
  }),
  smallWidth: Ember.computed('small', function() {
    return this._getBoostrapClass('sm', this.get('small'));
  }),
  extraSmallWidth: Ember.computed('xsmall', function() {
    return this._getBoostrapClass('xs', this.get('xsmall'));
  }),
  _getBoostrapClass(key, value) {
    if (value) {
      return `col-${key}-${value}`;
    }
  }
});
