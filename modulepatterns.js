//object literal

var Repeater = {

	repeatString : function repeatString (str, n){
						var newStr = '';
						for(var i = 0; i < n; i++){
							newStr += str;
						}
						return newStr;
					},

	repeatFunction : function repeatFunction (f, n){
							for(var i = 0; i < n; i++){
								f();
							}
						}

};

