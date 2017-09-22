const models = require('../../models/');
const Group = models.Group;
const User = models.User;

module.exports = function(router) {
  router.route('/group')
    // Create a group
    .post(function(req, res) {
      Group.create({
          name: req.body.name
        })
        .then(newGroup => {
          // This needs to be switched to user.id
          newGroup.addUser(req.body.id);
          res.status(201).json(newGroup);
        })
        .catch(error => { res.status(400).send(error) });
    })

  router.use(function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    }
    res.status(401).send({msg: 'Unauthorized'})
  })
  
  router.route('/group/join')
    .post(function(req, res) {
      Group.findOne({
          where: {
            inviteCode: req.body.inviteCode
          }
        })
        .then(result => {
          if (!result) {
            res.status(400).send({ msg: 'No group was found.' });
          }
          // This needs to be switched to user.id
          result.addUser(req.body.id);
          res.status(200).send({ success: true, msg: 'You have joined: ' + result.name });
        })
        .catch(error => {
          res.status(400).send(error);
          console.log(error);
        });
    })


}