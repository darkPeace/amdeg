angular.module('services', [])

 .factory('compute', [function () {
 	var o={
 		result:result
 	};
 	return o;

 	function result(arr1, arr2) {

 		if (arr2.length !== arr1.length) {
 			console.log('array length not the same');
 			return false;
 		}

 		var btul = prcent = 0;

 		for (var i = arr1.length - 1; i >= 0; i--) {
 			if (arr1[i] === arr2[i]){
 				btul++;
 			}
 		}

 		prcent = (btul/arr1.length)*100;

 		console.log(prcent);

 		return prcent;
 	}
 }])