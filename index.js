/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-adminlte-components',
  included: function(app) {
    this._super.included(app);
    app.import('node_modules/moment/moment.js');
    app.import('vendor/shims/moment.js');
    app.import('node_modules/admin-lte/dist/css/skins/_all-skins.css');
    app.import('node_modules/admin-lte/dist/js/adminlte.min.js');
    app.import('vendor/shims/jquery.js');
  }
};
