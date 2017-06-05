/**
 * GET /terms
 */
exports.termsGet = function(req, res) {
	res.render('terms', {
		title: 'Terms',
		class: 'terms'
	});
};
