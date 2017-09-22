const models = require('../../models/');
const User = models.User;
const Group = models.Group;

module.exports = function(router, passport) {
  // Routes for /api/user
  router.route('/user')
    // Create a user
    .post(function(req, res, next) {
      console.log(req.body);
      passport.authenticate('local-signin', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.status(401).json({ status: false, message: "Invalid Username or Password:" }) }
        req.logIn(user, function(err) {
          if (err) { return next(err); }

          delete user.password;
          console.log(info);
          return res.json(Object.assign(info, {
            user: user.id
          }));
        });
      })(req, res, next);
    })
  router.route('/logout')
    .get(function (req, res) {
      console.log(req.user)
      req.logout()
      return res.send({status: true, message: 'Logged out'})
    })
  router.route('/auth-check')
    .get(function (req, res) {
      if (req.user) {
        const { id, firstname } = req.user
        return res.send({
          id,
          firstName: firstname
        })
      } else {
        res.send(204)
      }
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
          ////// here is where you would grab groups
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

  router.route('/user/:id/groups')
    .get(function(req, res) {

      // Group.findAll({
      //     include: [{
      //       model: User,
      //       through: {
      //         where: { UserId: req.params.id }
      //       }
      //     }]
      //   })
      //   .then(function(results) {
      //     if (!results) {
      //       return res.json({ success: 'failure', message: 'no groups found' })
      //     }

      //     res.json(results)
      //   });



      // https://github.com/sequelize/sequelize/issues/6331
       User.findOne({
        where: {
          id: req.params.id
        },
        include: [{
          model: Group,
        }]
      })
      .then(function(user) {
        if (!user) {
          return res.json({ status: false })
        }
        ////// here is where you would grab groups
        //delete user.id
        res.json(user);
      })
      .catch(function(err) {
        console.log("Error: ", err);
        return done(err, null, null);
      });



      // Group.findAll({
      //   include: [{
      //     model: User,
      //     where: {id: req.params.id}
      //   }]
      // })
      // .then(function(userGroups) {
      //   console.log('I am here')
      //   return res.json(userGroups);
      // })
    })
}
