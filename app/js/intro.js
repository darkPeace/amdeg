angular.module('intro', [])

 .controller('intro-ctrl', ['$scope', '$rootScope', function (vm, rs) {
 	console.log('intro control initiated');
 	rs.bgi = 'bg1';
 }])