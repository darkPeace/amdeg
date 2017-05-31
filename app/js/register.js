angular.module('register', [])

 .controller('register-ctrl', ['$scope', '$rootScope', function (vm, rs) {

 	rs.bgi = 'bg3';
 	
 	console.log('register control initiated');
 }])