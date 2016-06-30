'use strict';

angular.module('runBeatApp.auth', ['runBeatApp.constants', 'runBeatApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
