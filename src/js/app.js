'use strict';

(function() {

	class Bloq {

		constructor() {
			// debugging
			let debug = true;

			// Project variables
			const d = document;
			const w = window;
			const theBody = d.getElementsByTagName("body")[0];
			const noJsClass = "no-js";
			const hasJsClass = "yes-js";

			// Run functions
			const bootstrap = new Bootstrap();
			// const hello = new Hello();

			// Logger
			function _log(val) {
				if(debug) {
					console.log(`[ Logger ] ${val}`);
				}
			}

			// JavaScript checker
			function Bootstrap() {
				theBody.classList.remove(noJsClass);
				theBody.classList.add(hasJsClass);
			}

			// Text splitting
			function _split(value) {
				return output = [...value].map(letter => `<span>${letter}</span>`).join('');
			}

			// Hello
			function Hello() {
				const sayHello = anime({
					targets: '#hello path',
					strokeDashoffset: [anime.setDashoffset, 0],
					easing: 'easeInOutSine',
					duration: 1500,
					delay: (el, i) => { return i * 250 },
					direction: 'alternate',
					loop: true
				});
			}
		}
	}

	new Bloq;

})();
