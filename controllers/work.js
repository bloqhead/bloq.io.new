/**
 * GET /work
 */
exports.workGet = function(req, res) {
	res.render('work', {
		title: 'Work',
		class: 'work'
	});
};
