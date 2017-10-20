import Ember from 'ember';


export default Ember.Component.extend({
  classNames: ['progress'],
  activeClass: Ember.computed('active', function() {
    if (this.get('active')) {
      return ' active progress-bar-striped';
    }
  }),
  reversedClass: Ember.computed('reversed', function() {
    if (this.get('reversed')) {
      return ' reversed';
    }
  }),
  progressBarClass: Ember.computed('activeClass', 'reversedClass', function() {
    let classes = [this.get('activeClass'), this.get('reversedClass')];
    return classes.join('');
  }),
  progressWidth: Ember.computed('progress', function () {
    return Ember.String.htmlSafe(`width: ${this.get('progress')}%`);
  })
});
