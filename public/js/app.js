'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	var Bloq = function Bloq() {
		_classCallCheck(this, Bloq);

		// debugging
		var debug = true;

		// Project variables
		var d = document;
		var w = window;
		var theBody = d.getElementsByTagName("body")[0];
		var noJsClass = "no-js";
		var hasJsClass = "yes-js";

		// Run functions
		var bootstrap = new Bootstrap();
		// const hello = new Hello();

		// Logger
		function _log(val) {
			if (debug) {
				console.log("[ Logger ] " + val);
			}
		}

		// JavaScript checker
		function Bootstrap() {
			theBody.classList.remove(noJsClass);
			theBody.classList.add(hasJsClass);
		}

		// Text splitting
		function _split(value) {
			return output = [].concat(_toConsumableArray(value)).map(function (letter) {
				return "<span>" + letter + "</span>";
			}).join('');
		}

		// Hello
		function Hello() {
			var sayHello = anime({
				targets: '#hello path',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeInOutSine',
				duration: 1500,
				delay: function delay(el, i) {
					return i * 250;
				},
				direction: 'alternate',
				loop: true
			});
		}
	};

	new Bloq();
})();
//# sourceMappingURL=app.js.map
