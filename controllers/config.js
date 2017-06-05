/**
 * GET /config
 */
exports.configGet = function(req, res) {
	res.render('config', {
		title: 'Config',
		class: 'config'
	});
};
