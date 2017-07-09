'use strict';

/**
 * @ngdoc function
 * @name calinApp.controller:ContactUsCtrl
 * @description
 * # ContactUsCtrl
 * Controller of the calinApp
 */
angular.module('calinApp')
  .controller('ContactUsCtrl', function ($scope, $http) {

    $scope.user = {};
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted

    $scope.submitForm = function(contactform) {
      console.log(arguments);
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            console.log("form is valid");
            console.log($scope.userForm);
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : angular.element.param($scope.user),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).then(function(data){
                
                console.log("there was no error");

                console.log(data);

                $scope.submitButtonDisabled = true;
                $scope.resultMessage = data.message;
                $scope.success == true ;
            });
        } else {
          $scope.submitButtonDisabled = false;
          $scope.resultMessage = data.message;
          $scope.result='bg-danger';

          console.log(formData);
          console.log("there was an error");
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
          }
        };
      });
