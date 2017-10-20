import Ember from 'ember';

export default Ember.Controller.extend({
  listRouteName: undefined,
  editRouteName: undefined,
  modelName: undefined,
  saveMessageKey: undefined,
  initialData: undefined,
  notificationService: Ember.inject.service('notifications'),
  intl: Ember.inject.service(),
  doSuccessTransition: function () {
    this.transitionToRoute(this.get('listRouteName'));
  },
  actions: {
    cancel: function() {
      this.transitionToRoute(this.get('listRouteName'));
    },
    saveObject: function(modelObject) {
      modelObject.save().then(
        (modelObject) => {
          this.get('notificationService').success(this.get('intl').t(this.get('saveMessageKey')));
          this.doSuccessTransition(modelObject);
        }, () => {
        }
      );
    },
    newInstance() {
      return this.store.createRecord(this.get('modelName'), this.get('initialData'));
    }
  }
});
