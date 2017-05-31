angular.module('unity', [])

 .controller('unity-ctrl', ['$scope', '$rootScope', function (vm, rs) {
 	rs.bgi ='bg7';
 	console.log('unity control initiated');
 }])