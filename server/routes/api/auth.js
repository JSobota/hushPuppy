const models = require('../../models/');
const User = models.User;

module.exports = function(router, passport) {
  // Routes for /api/user
  router.route('/user')
    // Create a user
    .post(function(req, res, next) {
      console.log(req.body);
      passport.authenticate('local-signin', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.json({ status: false }) }
        req.logIn(user, function(err) {
          if (err) { return next(err); }

          delete user.password;
          return res.json(Object.assign(info, {
            user: user.id
          }));
        });
      })(req, res, next);
    })

  // Routes for /api/user/:id
  router.route('/user/:id')
    // Get details for a specific user ID
    .get(function(req, res) {
      User.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(user) {
        if (!user) { 
          return res.json({ status: false }) 
        }
        ////// here is where you would grab exchanges
        //delete user.id
        res.json(user);
      })
      .catch(function(err) {
        console.log("Error: ", err);
        return done(err, null, null);
      });
    })

    // Update a user
    .put(function(req, res) {

    })

    // Delete a user
    .delete(function(req, res) {

    })
}