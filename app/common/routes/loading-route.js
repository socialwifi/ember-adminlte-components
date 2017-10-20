import Ember from 'ember';

export default Ember.Route.extend({
  loadedRouteName: null,
  loadingPropertyName: 'loading',

  renderTemplate() {
    this.activateLoading();
    this.render(this.loadedRouteName);
  },
  activateLoading() {
    this.controllerFor(this.loadedRouteName).set(this.loadingPropertyName, true);
  },
  deactivateLoading: function() {
    this.controllerFor(this.loadedRouteName).set(this.loadingPropertyName, false);
  }.on('deactivate')
});
