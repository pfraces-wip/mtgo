angular.module('app', [
  'templates', // pre-compiled html partials
  'app.routes', // routes configuration
  'app.main'   // <app-main>
])

.config(function ($locationProvider) {
  'use strict';

  $locationProvider.html5Mode(true);
});
