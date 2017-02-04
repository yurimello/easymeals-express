const environment = process.env.ENV || 'development';

var config = require('./config')[environment]

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var session = require('express-session')


var index = require('./app/routes/index');
var users = require('./app/routes/users');
var recipes = require('./app/routes/recipes');
var sessions = require('./app/routes/sessions');



// var sessions = require('./app/routes/sessions');

var app = express();


mongoose.Promise = global.Promise;

//
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true
// }))

var db = mongoose.connect(config.database_url);


// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
// app.use('/recipes', Session.isAuthenticated, recipes);
app.use('/recipes', recipes);
app.use('/sessions', sessions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

require('express-repl')(app);
module.exports = app;
