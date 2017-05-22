'use strict';

(function () {

	//
	// Flying Triangles
	//

	var colors = ['#D70E2F', '#F54768', '#8BD76B', '#07EFF3', '#EEF46E'];

	// triangle animations
	var triangles = anime({
		targets: '.shape svg',
		rotateZ: function rotateZ() {
			return anime.random(20, 1000);
		},
		rotateX: function rotateX() {
			return anime.random(20, 1000);
		},
		rotateY: function rotateY() {
			return anime.random(20, 1000);
		},
		translateZ: function translateZ() {
			return anime.random(0, 1000);
		},
		scale: function scale() {
			return anime.random(1, 5.5);
		},
		easing: 'easeOutElastic',
		elasticity: 300,
		duration: 10000,
		direction: 'alternate',
		loop: true
	});

	// triangle polygon animations
	var polygons = anime({
		targets: '.shape svg g',
		stroke: function stroke() {
			return colors[Math.floor(Math.random() * colors.length)];
		},
		easing: 'easeInOutCirc',
		duration: 5000,
		direction: 'alternate',
		loop: true
	});
})();
//# sourceMappingURL=app.js.map
