const models = require('../../models/');
const User = models.User;
const Group = models.Group;
const Message = models.Message;

module.exports = function(router, passport) {
  // Routes for /api/user
  router.route('/user')
    // Login
    .post(function(req, res, next) {
      console.log(req.body);
      passport.authenticate('local-signin', function(err, user, info) {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.status(401).json({ status: false, message: "Invalid Username or Password:" })
        }

        req.logIn(user, function(err) {
          if (err) {
            return next(err);
          }
          delete user.password;
          console.log(info);
          return res.json(Object.assign(info, { user: user.id }));
        });
      })(req, res, next);
    })

  // User create
  router.route('/user/create')
    .post(function(req, res, next) {
      // Check req for username and password, if there send to passport if not send null,false, message: "Email already registered"
      if (!req.body.email || !req.body.password) {
        res.status(400).send({ success: false, msg: 'Email or password is missing!' });
      }
      // Passport will return false and message: That email is already registered
      // Success it will return (null, newUser)
      passport.authenticate('local-signup', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) {
          res.status(400).send(Object.assign(info, { success: false }));
        } else {
          res.send({ success: true });
        }
      })(req, res, next);
    })

  router.route('/logout')
    .get(function(req, res) {
      console.log(req.user)
      req.logout()
      return res.send({ status: true, message: 'Logged out' })
    })
  router.route('/auth-check')
    .get(function(req, res) {
      if (req.user) {
        const { id, firstname } = req.user
        return res.send({
          id,
          firstName: firstname
        })
      } else {
        res.status(204).send({ status: false, message: 'No user logged in' });
      }
    })

  // router.use(function(req, res, next) {
  //   if (req.isAuthenticated()) {
  //     next();
  //   }
  //   res.status(401).send({msg: 'Unauthorized'})
  // })

  // Routes for /api/user/:id
  router.route('/user/:id')
    // Get details for a specific user ID
    .get(function(req, res) {
      User.findOne({
        where: {id: req.params.id},
        attributes: ['id', 'firstname', 'lastname', 'email']
      }).then(user => {
        if (user) {
          user.getGroups().then(groups => {
            if (!groups) {
              res.status(200).send({ success: false, msg: 'No groups found for user!' });
            } else {
              user = JSON.parse(JSON.stringify(user));
              Object.assign(user, { memberships: groups })
              Message.findAll({
                where: {
                  UserId: user.id
                }
              }).then(messages => {
                res.status(200).send((Object.assign(user, { messages: messages })));
              })
            }
          })
        } else {
          res.status(400).send({ success: false, msg: 'No user found!' })
        }
      })
    })
}