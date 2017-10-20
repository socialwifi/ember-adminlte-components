import Ember from 'ember';

export default Ember.Controller.extend({
  editController: undefined,
  editedModelId: Ember.computed('editController.model.id', function() {
    return this.get('editController.model.id');
  })
});
