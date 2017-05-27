angular.module('intro', [])

 .controller('intro-ctrl', ['$scope', function (vm) {
 	console.log('intro control initiated');
 	vm.bgi = {
 		"background-image": url("imgs/bg/background.jpg")
 	}
 }])