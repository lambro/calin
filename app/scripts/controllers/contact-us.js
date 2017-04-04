'use strict';

/**
 * @ngdoc function
 * @name calinApp.controller:ContactUsCtrl
 * @description
 * # ContactUsCtrl
 * Controller of the calinApp
 */
angular.module('calinApp')
  .controller('ContactUsCtrl', function ($scope) {

    $scope.user = {};

    $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

    };




  });
