'use strict';

angular.module('runBeatApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create1', {
        url: '/challenge',
        templateUrl: 'app/challenge/challenge.html'
      })
    .state('create2',{
      url: '/create2',/*TODO: Change*/
      templateUrl: 'app/components/create/challenge/challenge.view.html',
      controller: 'challengeController',
      access: {restricted: true}
    })
  });
