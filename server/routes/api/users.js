const models = require('../../models/');
const User = models.User;

module.exports = function(router, passport) {
  router.route('/user')
    .get(function(req, res, next) {
      res.send('hello');
    })

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

  router.route('/user/:id')
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

    .put(function(req, res) {

    })

    .delete(function(req, res) {

    })
}