import Ember from 'ember';

const Message = Ember.Object.extend({
  type: '',
  text: ''
});
const SuccessMessage = Message.extend({
  type: 'success'
});
const ErrorMessage = Message.extend({
  type: 'error'
});
const WarningMessage = Message.extend({
  type: 'warning'
});

export default Ember.Service.extend({
  notifications: [],
  success: function(text) {
    this.notify(SuccessMessage.create({text: text}));
  },
  error: function(text) {
    this.notify(ErrorMessage.create({text: text}));
  },
  warning: function(text) {
    this.notify(WarningMessage.create({text: text}));
  },
  notify: function(notification) {
    this.get('notifications').addObject(notification);
  }
});
