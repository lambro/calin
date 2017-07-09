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
  .config(["$routeProvider", function ($routeProvider) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name calinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calinApp
 */
angular.module('calinApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name calinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the calinApp
 */
angular.module('calinApp')
  .controller('AboutCtrl', ['$scope', '$moment', '$timeout', function ($scope, $moment, $timeout) {


  }]);

'use strict';

/**
 * @ngdoc function
 * @name calinApp.controller:OurServicesCtrl
 * @description
 * # OurServicesCtrl
 * Controller of the calinApp
 */
angular.module('calinApp')
  .controller('OurServicesCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name calinApp.controller:TheTeamCtrl
 * @description
 * # TheTeamCtrl
 * Controller of the calinApp
 */
angular.module('calinApp')
  .controller('TheTeamCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name calinApp.controller:HealthAndSafetyCtrl
 * @description
 * # HealthAndSafetyCtrl
 * Controller of the calinApp
 */
angular.module('calinApp')
  .controller('HealthAndSafetyCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name calinApp.controller:ContactUsCtrl
 * @description
 * # ContactUsCtrl
 * Controller of the calinApp
 */
angular.module('calinApp')
  .controller('ContactUsCtrl', ["$scope", "$http", function ($scope, $http) {

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
      }]);

angular.module('calinApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"row row-eq-height about-the-force\"> <div class=\"col-md-6\"> <div class=\"main-image about img-responsive\"></div> </div> <div class=\"col-md-6\"> <h2 class=\"text-center\">About the Force</h2> <p class=\"introduction\"> Labour Force provides skilled and reliable labourers for any construction job, no matter how big or small. Whether you need a construction crew to see a project from start to finish or one labourer for an afternoons work, we can provide you with experienced members of our team. <br><br> Labour Force differs from agencies as we already have a successful team ready for work. Our employees have already been proven to be hard working, reliable and integral. We value every person in our workforce and that’s why we invest in our employees with ongoing training so they can give their best to your project. <br><br> Our force consists of high quality labourers with a blend of skills and experiences that can be tailored to your needs. Focusing exclusively on labour means that we know what makes a valuable construction worker. <br><br> When it comes to quality control we are hands on, we will get together with you frequently to make sure you are getting a reliable service. </p> </div> <div class=\"col-md-12 text-center margin-top\"> <a href=\"#!/our-services\"><h3 class=\"next-page\">View Our Services &#8594; </h3></a> </div> </div>"
  );


  $templateCache.put('views/contact-us.html',
    "<div class=\"contact-us row\"> <div class=\"col\"> <div class=\"main-image contact-us img-responsive\"> <div class=\"cover\"></div> <h3>Contact Us</h3> </div> </div> </div> <div class=\"row contact-us margin-top\" ng-controller=\"ContactUsCtrl\"> <div class=\"col-xs-12 col-md-6\"> <h2 class=\"hidden-xs\">Contact Us</h2> <form name=\"userForm\" ng-submit=\"submitForm(userForm)\" novalidate> <div class=\"form-group\" ng-class=\"{ 'has-success' : userForm.name.$valid && !userForm.name.$pristine, 'has-error' : !userForm.name.$valid && !userForm.name.$pristine }\"> <label for=\"customerName\">Name</label> <input type=\"text\" class=\"form-control\" ng-minlength=\"3\" ng-class=\"{ 'form-control-success' : userForm.name.$valid && !userForm.name.$pristine, 'form-control-error' : !userForm.name.$valid && !userForm.name.$pristine }\" name=\"name\" ng-model=\"user.name\" id=\"customerName\" placeholder=\"Name\" required> <p ng-show=\"userForm.name.$invalid && !userForm.name.$pristine\" class=\"help-block\">Your name is required.</p> <p ng-show=\"userForm.name.$error.minlength\" class=\"help-block\">A name with over 3 characters is required.</p> </div> <div class=\"form-group\" ng-class=\"{ 'has-success' : userForm.companyName.$valid && !userForm.companyName.$pristine, 'has-error' : !userForm.companyName.$valid && !userForm.companyName.$pristine }\"> <label for=\"companyName\">Company Name</label> <input type=\"text\" class=\"form-control\" ng-minlength=\"3\" ng-class=\"{ 'form-control-success' : userForm.companyName.$valid && !userForm.companyName.$pristine }\" name=\"companyName\" id=\"companyName\" ng-model=\"user.companyName\" placeholder=\"Company Name\" required> <p ng-show=\"userForm.companyName.$invalid && !userForm.companyName.$pristine\" class=\"help-block\">Company name is required.</p> <p ng-show=\"userForm.companyName.$error.minlength\" class=\"help-block\">A name with over 3 characters is required.</p> </div> <div class=\"form-group\" ng-class=\"{ 'has-success' : userForm.emailAddress.$valid && !userForm.emailAddress.$pristine, 'has-error' : !userForm.emailAddress.$valid && !userForm.emailAddress.$pristine }\"> <label for=\"emailAddress\">Contact Email Address</label> <input type=\"email\" pattern=\"^\\S+@\\S+\\.\\S+$\" ng-class=\"{ 'form-control-success' : userForm.emailAddress.$valid && !userForm.emailAddress.$pristine }\" class=\"form-control\" name=\"emailAddress\" ng-model=\"user.emailAddress\" id=\"emailAddress\" placeholder=\"Email Address\" required> <p ng-show=\"userForm.emailAddress.$invalid && !userForm.emailAddress.$pristine\" class=\"help-block\">Your email address is required.</p> <p ng-show=\"userForm.emailAddress.$error.pattern\" class=\"help-block\">Please enter a valid email address.</p> </div> <div class=\"form-group\" ng-class=\"{ 'has-success' : userForm.customerPhoneNumber.$valid && !userForm.customerPhoneNumber.$pristine, 'has-error' : !userForm.customerPhoneNumber.$valid && !userForm.customerPhoneNumber.$pristine }\"> <label for=\"customerPhoneNumber\">Contact Number</label> <input type=\"tel\" class=\"form-control\" ng-class=\"{ 'form-control-success' : userForm.customerPhoneNumber.$valid && !userForm.customerPhoneNumber.$pristine }\" ng-minlength=\"7\" name=\"customerPhoneNumber\" ng-model=\"user.customerPhoneNumber\" id=\"customerPhoneNumber\" placeholder=\"Number\" required> <p ng-show=\"userForm.customerPhoneNumber.$invalid && !userForm.customerPhoneNumber.$pristine\" class=\"help-block\">Your phone number is is required.</p> <p ng-show=\"userForm.customerPhoneNumber.$error.minlength\" class=\"help-block\">Please enter at least 7 digits.</p> </div> <div class=\"form-group\" ng-class=\"{ 'has-success' : userForm.enquiryText.$valid && !userForm.enquiryText.$pristine, 'has-error' : !userForm.enquiryText.$valid && !userForm.enquiryText.$pristine }\"> <label for=\"enquiryText\">Message</label> <textarea type=\"text\" class=\"form-control\" ng-class=\"{ 'form-control-success' : userForm.enquiryText.$valid && !userForm.enquiryText.$pristine }\" ng-model=\"user.enquiryText\" ng-minlength=\"30\" name=\"enquiryText\" id=\"enquiryText\" placeholder=\"Enter your enquiry here...\" required></textarea> <p ng-show=\"userForm.enquiryText.$error.minlength\" data-ng-click=\"submit(userForm)\" class=\"help-block\">A message with over 30 characters is required.</p> </div> <small class=\"form-text text-muted\">*All fields are required.</small> <button type=\"submit\" class=\"btn btn-primary submit-button margin-top\" ng-disabled=\"userForm.$invalid\">Submit</button> <div ng-show=\"success\"> Thank you for submitting your enquiry </div> </form> </div> <div class=\"col-xs-12 visible-xs margin-top mobile\"> <div class=\"main-image contact-us img-responsive\"> <div class=\"cover\"></div> <h3>Find Us</h3> </div> </div> <div class=\"col-xs-12 col-md-6\"> <h2 class=\"hidden-xs\">Find Us</h2> <iframe width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ09DfkGQABDQRqMgvgYxGkbM&key=AIzaSyC83qGXcYW3c3YUW6ptvb6FQqAARroOKQ0\" allowfullscreen></iframe> </div> </div> "
  );


  $templateCache.put('views/health-and-safety.html',
    "<div class=\"health-and-safety\"> <div class=\"row\"> <div class=\"col\"> <div class=\"main-image health-and-safety img-responsive\"> <div class=\"cover\"></div> <h3>Health & Safety</h3> </div> </div> </div> <div class=\"row margin-top\"> <div class=\"col-xs-12\"> <p>We understand the importance of health & safety for a successful completion of a project. We ensure our team have the correct training so they follow all practices, keeping your site safe and secure.</p> </div> <div class=\"col-xs-12 margin-top mobile\"> <p class=\"strong\">We keep health and safety as a top priority by:</p> <p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Ensuring safe working conditions for potentially high risk jobs e.g. working at height, heavy lifting and working with machinery.</p> </div> <div class=\"col-xs-12\"> <p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Making sure our H&S procedures are fully CDM compliant.</p><p> </p></div> <div class=\"col-xs-12\"> <p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Providing H&S training for every member of the force.</p> </div> <div class=\"col-xs-12\"> <p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Carrying out regular risk management to avoid any potential risks.</p> </div> <div class=\"col-xs-12\"> <p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Submission of RAMS to show full compliance with CDM guidelines.</p> </div> <div class=\"col-xs-12 margin-top mobile\"> <p>Our health and safety procedures are regularly updated and procedures and policies reflect best practices. With Labour Force on site, we'll take care of every health and safety detail from risk assessment to providing the right equipment, ensuring a safe secure environment.</p> </div> </div> </div> <div class=\"row\"> <div class=\"col-xs-12 text-center margin-top\"> <a href=\"#!/contact-us\"><h3 class=\"next-page\">Contact Us &#8594; </h3></a> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"row no-gutters\"> <div class=\"col-md-12\"> <div class=\"main-image home img-responsive\"> <div class=\"cover\"></div> <h3>Welcome</h3> </div> <div class=\"col-md-12\"> <p class=\"introduction text-center\"> SUPPLIER OF LABOUR IN THE SURREY AND LONDON AREA </p> </div> <div class=\"col-md-12 text-center margin-top\"> <a href=\"#!/about\"><h3 class=\"next-page\">About The Force &#8594; </h3></a> </div> </div> </div>"
  );


  $templateCache.put('views/our-services.html',
    "<div class=\"row\"> <div class=\"col\"> <div class=\"main-image our-services img-responsive\"> <div class=\"cover\"></div> <h3>Our Services</h3> </div> </div> </div> <h2 class=\"margin-top main-service-heading\">We provide labour for the following services</h2> <div class=\"row row-eq-height justify-content-around our-services margin-top mobile\"> <div class=\"col-md-6\"> <h2>Interior stripping</h2> <p class=\"margin-top\">Our experienced labourers will remove whatever you need, be that heating, ventilation, air con, electrical systems, non-load-bearing partitions, floors, ceilings and utilities. (ADD SOMETHING TO THIS)</p> </div> <div class=\"col-md-6\"> <h2>Soft stripping</h2> <p class=\"margin-top\">Our team will soft strip the building head to toe and ensure removal of all loose elements. We'll strip out all wood, metal, plastics and rubble, remove all materials, and send them for recycling where appropriate. </p> </div> </div> <div class=\"row margin-top justify-content-center\"> <div class=\"col-md-5\"> <div class=\"line\"></div> </div> </div> <div class=\"row row-eq-height justify-content-around margin-top our-services\"> <div class=\"col-md-6\"> <h2>Demolition</h2> <p class=\"margin-top\">Our demolition experts will ensure a clean, safe demolition. Our service covers everything from a simple demolition to carefully working around the façade of a listed building. </p> </div> <div class=\"col-md-6\"> <h2>Final cleaning</h2> <p class=\"margin-top\">Our final cleaning service uses only the safest and most efficient techniques to get your site cleaned up. Whether you're working on a renovation, fit out, or a new build, our team will leave your site clean and secure. </p> </div> </div> <div class=\"row\"> <div class=\"col-md-12 text-center margin-top\"> <a href=\"#!/the-team\"><h3 class=\"next-page\">View The Team &#8594; </h3></a> </div> </div>"
  );


  $templateCache.put('views/the-team.html',
    "<div class=\"row\"> <div class=\"col-sm-12\"> <div class=\"main-image the-team img-responsive\"> <div class=\"cover\"></div> <h3>The Team</h3> </div> </div> </div> <div class=\"row margin-top row-eq-height justify-content-around the-team\"> <div class=\"col\"> <p>We focus on providing high quality labour so you can focus on keeping your project moving. Every member of our workforce has skills and experience you can trust.</p> <p class=\"margin-top strong\">We guarantee all of our employees have:</p> <ul class=\"list-unstyled margin-top\"> <li><p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Eligibility to work in the UK.</p></li> <li><p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>CSCS card.</p></li> <li><p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Relevant work experience or qualifications.</p></li> <li><p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Completed background check.</p></li> <li><p><span class=\"number\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>Recent references from previous employers.</p></li> </ul> <p class=\"margin-top\"> We know that finding the right labourer is about more than just having the right qualifications. That's why we only take on team members with a good attitude and strong work ethic. <br><br> Our experienced team also come fully equipped with their own personal protective equipment. </p> </div> </div> <div class=\"row\"> <div class=\"col-md-12 text-center margin-top\"> <a href=\"#!/health-and-safety\"><h3 class=\"next-page\">View Health & Safety &#8594; </h3></a> </div> </div>"
  );

}]);
