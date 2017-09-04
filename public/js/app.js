'use strict';

var debug = true;

// Logger
function _Log(value) {
	if (debug) {
		console.log('[ Logger ] ' + value);
	}
}

// Hamburger
function Burger() {
	var burger = document.querySelector('.burger');
	var navContainer = document.querySelector('.mobile-nav-container');
	var activeClass = 'is-active';

	burger.addEventListener('click', function (e) {
		e.preventDefault;
		this.classList.toggle(activeClass);
		navContainer.classList.toggle(activeClass);
		_Log('burger active');
	});
}

Burger();
//# sourceMappingURL=app.js.map
