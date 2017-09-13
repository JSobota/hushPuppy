var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var passport = require('passport');
var session = require('express-session');
// var RedisStore = require('connect-redis')(session);
var flash = require('connect-flash');
var index = require('./routes/index');
var models = require('./models');

// const users = require('./routes/users');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
require('./config/passport/passport')(passport, models.User);


app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// app.use('/users', users);

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

module.exports = app;

// app.get('/api/test', (req, res) => {
//   const response = {
//     "numbers": [
//       "one",
//       "two",
//       "three",
//       "four"
//     ]
//   }

//   res.json(response)
// })

// app.listen(PORT, () => console.log('running'))
