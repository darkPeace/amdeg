angular.module('exam', [])

 .controller('exam-ctrl', ['$scope', '$rootScope', '$http', '$timeout', 
 'compute', function (vm, rs, http, t, cal) {
 	rs.bgi = 'bg8';
 	vm.now = 0;
 	vm.answd = new Array(10);
 	var truth = [];

	var timer = 2401;
	vm.m = 'LoAd';
	vm.s = 'Ng...';
	var time = null;

 	http.get('xjson/question.json').then(function (resp) {
 		vm.questions = resp.data;
 		startcount();
 		truth = resp.data.map(function (a) {
 			return a.answer
 		})
 		console.log(truth);
 	});

	function startcount() {
		timer--;

		vm.m = Math.floor(timer/60,0);
		vm.s = timer%60;

		time = t(startcount,1000);
		if (timer == 0){
			alert('Your time is up');
			t.cancel(time); vm.submit();
		}
	}

 	vm.que = function (index) {
 		vm.now = index;
 	}

 	vm.jwb = function (qno,key) {
 		vm.answd.splice(qno, 1, key);
 		vm.now++;
 		vm.now>=vm.answd.length?vm.submit():false;
 	}

 	vm.submit = function () {
 		console.log(vm.answd);
 		if (checkempty(vm.answd)) {
 			alert('You did not answer some question. Proceed submit?');
 		}
 		// alert('woiiii');
	 	cal.result(truth,vm.answd);
 	}

 	function checkempty(arr) {
 		var a=[];
 		for (var i = arr.length - 1; i >= 0; i--) {
 			a.push(typeof arr[i]);
 		}

 		if (a.indexOf('undefined') > -1) {
	 		return true;
 		}else{
 			return false;
 		}
 	}


 	console.log('exam control initiated');
 }])