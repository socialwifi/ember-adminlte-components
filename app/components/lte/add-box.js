import Ember from 'ember';

export default Ember.Component.extend({
  content: Ember.computed('refresh', function() {
    return this.getNew();
  }),
  actions: {
    cancel() {
      this.get('content').deleteRecord();
      return this.attrs.action();
    }
  }
});
