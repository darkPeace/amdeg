angular.module('signin', [])

 .controller('signin-ctrl', ['$scope', '$rootScope', '$state', function (vm, rs, st) {
 	rs.bgi = 'bg2';

 	vm.submit = function (test) {
 		console.log(test)
 		if (test !== {}) {
 			st.go('unity');
 		}
 	}
 }])