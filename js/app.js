var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   // $locationProvider.html5Mode(true);
   $routeProvider
   .when('/', {
		templateUrl : '../view/login.html',
		controller : 'loginCreatUserlistBuyCtrl',
   	})
	.when('/create', {
		templateUrl : '../view/create.html',
		controller  : 'loginCreatUserlistBuyCtrl',
	})
	.when('/list', {
   		templateUrl : '../view/list.html',
   		controller  : 'listBuyCtrl',
	})
	.when('/details', {
		templateUrl : '../view/details.html',
		controller  : 'listDetailBuyCtrl',
   })
   .otherwise ({ redirectTo: '/' });
});
