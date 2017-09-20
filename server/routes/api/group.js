const models = require('../../models/');
const Group = models.Group;
const User = models.User;

module.exports = function(router) {
  router.route('/group')
    // Create a group
    .post(function(req, res) {
      console.log(req.body);
      Group.create({
          name: req.body.name
        })
        .then(newGroup => 
          { 
            console.log(req.user);
            newGroup.addUser(req.user.id);
            // User.addGroup(newGroup, {role: 'admin'});
            res.status(201).json(newGroup);
          }
        )
        .catch(error => { res.status(400).send(error) });
    })
}