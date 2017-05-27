angular.module('routerconfig', ['ui.router'])
.config(['$stateProvider', '$locationProvider', function (stateProvider, locationProvider) {
	
	locationProvider.html5Mode(true);
	
	stateProvider
	  .state('intro', {
	  	url: '/',
	  	templateUrl: 'html/intro.html',
	  	controller: 'intro-ctrl'
	  })

	  .state('signin', {
	  	url: '/signin',
	  	templateUrl: 'html/signin.html',
	  	controller: 'signin-ctrl'
	  })

	  .state('register', {
	  	url: '/regs',
	  	templateUrl: 'html/register.html'
	  })
}])

;