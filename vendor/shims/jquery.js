(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['$'] };
  }

  define('jquery', [], vendorModule);
})();
