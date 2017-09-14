const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const index = require('./routes/index');
const models = require('./models');
const PORT = 3001;


const app = express();
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

app.use('/api', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
app.listen(PORT, () => console.log('running'));

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


