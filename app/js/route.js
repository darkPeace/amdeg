angular.module('routerconfig', ['ui.router'])
.config(['$stateProvider', '$locationProvider', function (stateProvider, locationProvider) {
	
	locationProvider.html5Mode(true);
	
	stateProvider
	  .state('home', {
	  	url: '/',
	  	templateUrl: 'html/home.html',
	  	controller: 'home-ctrl'
	  })
}])

;