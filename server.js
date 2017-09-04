//
// Node Server Configuration
//

// Setup initial constants
const express = require('express');
const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const nunjucks = require('nunjucks');
const mongoose = require('mongoose');
const passport = require('passport');

// Load environment variables from .env file
dotenv.load();

// Controllers
const homeController = require('./controllers/home');
const userController = require('./controllers/user');
const contactController = require('./controllers/contact');
const workController = require('./controllers/work');
const configController = require('./controllers/config');
const termsController = require('./controllers/terms');

// Passport OAuth strategies
require('./config/passport');

// Setup Express
const app = express();

// Connect to Mongo
mongoose.connect(process.env.MONGODB);
mongoose.connection.on( 'error', function() {
	console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
	process.exit(1);
});

// View engine setup
nunjucks.configure( 'views', {
	autoescape: true,
	express: app
});

app.set( 'view engine', 'html' );
app.set( 'port', process.env.PORT || 3000 );
app.use( compression() );
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( expressValidator() );
app.use( methodOverride('_method') );
app.use( session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true
	})
);
app.use( flash() );
app.use( passport.initialize() );
app.use( passport.session() );
app.use( function(req, res, next)  {
	res.locals.user = req.user;
	next();
});
app.use( express.static( path.join( __dirname, 'public' ) ) );

//
// Controllers
//

// Basic pages
app.get('/', homeController.index);
app.get('/work', workController.workGet);
app.get('/config', configController.configGet);
app.get('/terms', termsController.termsGet);
app.get('/contact', contactController.contactGet);
app.post('/contact', contactController.contactPost);

// Auth pages
app.get('/account', userController.ensureAuthenticated, userController.accountGet);
app.put('/account', userController.ensureAuthenticated, userController.accountPut);
app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
app.get('/signup', userController.signupGet);
app.post('/signup', userController.signupPost);
app.get('/login', userController.loginGet);
app.post('/login', userController.loginPost);
app.get('/forgot', userController.forgotGet);
app.post('/forgot', userController.forgotPost);
app.get('/reset/:token', userController.resetGet);
app.post('/reset/:token', userController.resetPost);
app.get('/logout', userController.logout);
app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));

// Production error handler
if ( app.get('env') === 'production' ) {
	app.use( function(err, req, res, next) {
		console.error(err.stack);
		res.sendStatus(err.status || 500);
	});
}

// Listener
app.listen( app.get('port'), function() {
	console.log( 'Express server listening on port ' + app.get('port') );
});

module.exports = app;
