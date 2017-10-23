/* global $ */
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $.AdminLTE.init();
  },
  willDestroyElement() {
    let options = $.AdminLTE.options;
    if (options.sidebarPushMenu) {
      $(document).off('click', options.sidebarToggleSelector);
    }
  }
});
