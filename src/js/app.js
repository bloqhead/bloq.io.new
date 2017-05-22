(function() {

//
// Flying Triangles
//

const colors = [ '#D70E2F', '#F54768', '#8BD76B', '#07EFF3', '#EEF46E' ];

// triangle animations
const triangles = anime({
	targets: '.shape svg',
	rotateZ: () => ( anime.random( 20, 1000 ) ),
	rotateX: () => ( anime.random( 20, 1000 ) ),
	rotateY: () => ( anime.random( 20, 1000 ) ),
	translateZ: () => ( anime.random( 0, 1000 ) ),
	 scale: () => (anime.random(1, 5.5)),
	easing: 'easeOutElastic',
	elasticity: 300,
	duration: 10000,
	direction: 'alternate',
	loop: true
});

// triangle polygon animations
const polygons = anime({
	targets: '.shape svg g',
	stroke: () => colors[Math.floor(Math.random()*colors.length)],
	easing: 'easeInOutCirc',
	duration: 5000,
	direction: 'alternate',
	loop: true
});

})();
