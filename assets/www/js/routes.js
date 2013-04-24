angular.module('angularTest', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/page1', {templateUrl: 'partials/page1Content.html',   controller: Page1Controller}).
      when('/page2', {templateUrl: 'partials/page2Content.html', controller: Page2Controller}).
      otherwise({redirectTo: '/page1'});
}]);