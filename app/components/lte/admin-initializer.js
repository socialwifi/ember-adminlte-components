import Ember from 'ember';
import $ from 'jquery';

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
