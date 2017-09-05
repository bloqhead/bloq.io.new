'use strict'

const debug = false

// Enable debugging if working locally
if( window.location.href.indexOf('localhost') > -1 ) {
	debug = true
}

// Logger
function _Log(value) {
	if(debug) {
		console.log(`[ Logger ] ${value}`)
	}
}

// Hamburger
function Burger() {
	const burger = document.querySelector('.burger')
	const navContainer = document.querySelector('.mobile-nav-container')
	const activeClass = 'is-active'

	burger.addEventListener( 'click', (e) => {
		e.preventDefault
		this.classList.toggle(activeClass)
		navContainer.classList.toggle(activeClass)
		_Log('burger active')
	}
}

Burger()