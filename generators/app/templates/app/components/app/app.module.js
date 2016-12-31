(function() {
  'use strict';

  angular.module('app', [
    // Angular modules
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    // Contrib modules
    'ui.router',
    'ngStorage',
    'angular-loading-bar',
    // Custom modules
    'app.api',
    'app.utils',
  ]);
})();
