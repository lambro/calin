'use strict';

/**
 * @ngdoc overview
 * @name calinApp
 * @description
 * # calinApp
 *
 * Main module of the application.
 */
angular
  .module('calinApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-momentjs'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/our-services', {
        templateUrl: 'views/our-services.html',
        controller: 'OurServicesCtrl',
        controllerAs: 'ourServices'
      })
      .when('/the-team', {
        templateUrl: 'views/the-team.html',
        controller: 'TheTeamCtrl',
        controllerAs: 'theTeam'
      })
      .when('/health-and-safety', {
        templateUrl: 'views/health-and-safety.html',
        controller: 'HealthAndSafetyCtrl',
        controllerAs: 'healthAndSafety'
      })
      .when('/contact-us', {
        templateUrl: 'views/contact-us.html',
        controller: 'ContactUsCtrl',
        controllerAs: 'contactUs'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
