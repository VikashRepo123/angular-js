// Register `phoneList` component, along with its associated controller and template
angular.module('phonecatApp', []).component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    template:
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul> {{userName}}',

    controller: ['$scope', function($scope) {
        $scope.userName = 'Sanu';
        this.phones = [
          {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
          }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
          }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
          }
        ];
      }]

  });