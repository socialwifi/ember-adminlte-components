import Ember from 'ember';

export default Ember.Component.extend({
  notificationService: Ember.inject.service('notifications'),
  didInsertElement: function() {
    let widget = this.$();
    Ember.run.later(widget, () => {
      widget.fadeOut();
      this.get('notificationService.notifications').removeObject(this.get('notification'));
    }, 3000);
  }
});
