const models = require('../../models/');
const Group = models.Group;
const User = models.User;

module.exports = function(router) {
  router.route('/group')
    // Create a group
    .post(function(req, res) {
      console.log(req.body.inviteCode)
      Group.create({
          name: req.body.name,
          inviteCode: req.body.inviteCode
        })
        .then(newGroup => {
          // This needs to be switched to user.id
          newGroup.addUser(req.user.id,{ through: { role: 'admin' }});
          res.status(201).json(newGroup);
        })
        .catch(error => { res.status(400).send(error) });
    })

    // Get a list of all the groups, and their end dates
    .get(function(req,res){
      Group.findAll({
        attributes: ['id', 'name', 'endDate', 'createdAt']
      })
      .then(results => {
        res.status(201).send(results);
      })
    })
  // router.use(function(req, res, next) {
  //   if (req.isAuthenticated()) {
  //     next();
  //   }
  //   res.status(401).send({msg: 'Unauthorized'})
  // })

  // Join a group
  // Requires a inviteCode that is a string, and for a user to be logged in
  router.route('/group/join')
    .post(function(req, res) {
      console.log('ffffffffffffffffffffffffff')
      console.log(req.body.inviteCode)
      Group.findOne({
          where: {
            inviteCode: req.body.inviteCode
          }
        })
        .then(result => {
          if (!result) {
            res.status(400).send({ msg: 'No group was found.' });
          }
          // This needs to be switched to req.user.id
          //
          result.addUser(req.user.id).then( () => {
            res.status(200).send({ success: true, msg: 'You have joined: ' + result.name });
          })
          //
          result.addUser(req.body.id);
          res.status(200).send({ success: true, msg: 'You have joined: ' + result.name });
>>>>>>> 1703fe520456547509a6b1fa2ff94c007147b40d
        })
        .catch(error => {
          res.status(400).send(error);
          console.log(error);
        });
    })

  router.route('/group/:id')
    // Get a list of all memebers, message, and end date
    .get(function(req, res) {
      Group.findById(req.params.id).then(group => {
        if (group) {
          group.getUsers({attributes: ['id', 'firstname', 'lastname', 'email'] }).then(members => {
            // group.people = members;
            console.log(group);
            group = JSON.parse(JSON.stringify(group));

            res.status(200).send( (Object.assign(group, {members: members})) );
            // res.status(200).send( {...group, members: members} );
          })
        }
        if (!group) {
          res.status(200).send({success: false, msg: 'No group found'});
        }

      })
      .catch(error => {
        restatus(400).send(error);
      })
    })


}
