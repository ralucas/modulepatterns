var Repeater = (function (){

	var count = 0;
	
	var repeatString = 
		function repeatString (str, n){
			var newStr = '';
				for(var i = 0; i < n; i++){
					newStr += str;
				}
			return newStr;
		};

	var repeatFunction = 
		function repeatFunction (f, n){
			for(var i = 0; i < n; i++){
				f();
			}
		};

	var repeatMore = 
		function repeatMore (str){
			for(var i = 0; i < 1; i++){
				count += 1;
			}
			return repeatString(str, count);
		};

	var repeatFunctionTwice =
		function repeatFunctionTwice (f, n){
			for(var i = 0; i < 2; i++){
				repeatFunction(f, n);
			}
		};

	return {
		repeatString : repeatString,
		repeatFunction : repeatFunction,
		repeatMore : repeatMore,
		repeatFunctionTwice : repeatFunctionTwice
	}

})();