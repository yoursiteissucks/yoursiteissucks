angular.module('MyApp', ['ngRoute', 'firebase', 'MyApp.services', 'MyApp.filters'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'public/views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'public/views/about.html',
        controller: ''
      })
      // .when('/reviews/:id', {
      //   templateUrl: 'public/views/detail.html',
      //   controller: ''
      // })
      .when('/reviews', {
        templateUrl: 'public/views/reviews.html',
        controller: 'ReviewsCtrl'
      })
      .when('/signin', {
        templateUrl: 'public/views/signin.html',
        controller: 'AuthCtrl'
      })
      .when('/signup', {
        templateUrl: 'public/views/signup.html',
        controller: 'AuthCtrl'
      })
      .when('/faq', {
        templateUrl: 'public/views/faq.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);
