var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;


  passport.use("local-signup", new LocalStrategy({
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true // allows us to pass back the entire request to the callbacl
    },
    function(req, email, password, done) {
      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        // User already exists in the database
        if (user) {
          return done(null, false, {
            msg: "That email is already registered."
          });
        } else {
          var userPassword = generateHash(password);
          var data = {
            email: email,
            password: userPassword
            // firstname: req.body.firstName,
            // lastname: req.body.lastName,
            // status: req.body.contractor,
            // company: req.body.company
          };

          User.create(data).then(function(newUser, created) {
            if (!newUser) {
              return done(null, false);
            }

            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));

  passport.use("local-signin", new LocalStrategy({
      // Default use username/password; we override with Email
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, email, password, done) {
      console.log('hehea');
      var User = user;
      var isValidPassword = function(userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        if (!user) {
          return done(false, false,  {
            msg : 'Failure'
          })
        }

        if (!isValidPassword(user.password, password)) {
          return done(false, false,  {
            msg : 'Failure'
          })
        }

        var userinfo = user.get();
        return done(null, userinfo, {
          success : true
        });
      }).catch(function(err) {
        console.log("Error: ", err);
        return done(err, null, null);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    var sessionUser = { id: user.id, email: user.email };
    done(null, sessionUser);
  });

  passport.deserializeUser(function(user, done) {
    User.findById(user.id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(users.errors, null);
      }
    });
  });

  // passport.deserializeUser(function(id, done) {
  //   User.findById(id).then(function(user) {
  //     if (user) {
  //       done(null, user.get());
  //     } else {
  //       done(users.errors, null);
  //     }
  //   });
  // });
}