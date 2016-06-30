'use strict';
(function(){

class ChallengeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('runBeatApp')
  .component('challenge', {
    templateUrl: 'app/challenge/challenge.html',
    controller: ChallengeComponent
  });

})();
