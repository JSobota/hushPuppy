const models = require('../../models/');
const Group = models.Group;
const User = models.User;
const Message = models.Message;
// const { User, Group, Message } = models;

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
          // This needs to be switched to req.user.id
          newGroup.addUser(req.body.id, { through: { role: 'admin' } });
          res.status(201).json(newGroup);
        })
        .catch(error => { res.status(400).send(error) });
    })

  // Get a list of all the groups, and their end dates
    .get(function(req, res) {
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
<<<<<<< HEAD
          //
          result.addUser(req.user.id).then(() => {
=======
          result.addUser(req.body.id).then(() => {
>>>>>>> dan
            res.status(200).send({ success: true, msg: 'You have joined: ' + result.name });
          })
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
<<<<<<< HEAD
        if (group) {
          group.getUsers({ attributes: ['id', 'firstname', 'lastname', 'email'] }).then(members => {
            // group.people = members;
            console.log(group);
            group = JSON.parse(JSON.stringify(group));
            Object.assign(group, { members: members });
            Message.findAll({
              where: {
                GroupId: req.params.id
              }
            }).then(messages => {
              res.status(200).send((Object.assign(group, { messages: messages })));
=======
          if (group) {
            group.getUsers({ attributes: ['id', 'firstname', 'lastname', 'email'] }).then(members => {
              // group.people = members;
              console.log(group);
              group = JSON.parse(JSON.stringify(group));
              Object.assign(group, { members: members });
              Message.findAll({
                where: {
                  GroupId: req.params.id
                }
              }).then(messages => {
                res.status(200).send((Object.assign(group, { messages: messages })));
              })
              // res.status(200).send((Object.assign(group, { members: members })));
>>>>>>> dan
            })

            // res.status(200).send((Object.assign(group, { members: members })));
          })
        }
        if (!group) {
          res.status(200).send({ success: false, msg: 'No group found' });
        }
      })
        .catch(error => {
          restatus(400).send(error);
        })
    })

  router.route('/group/:id/message')
  // Create messages
    .post(function(req, res) {
      Message.create({
        message: req.body.message,
        UserId: req.body.uid,
        GroupId: req.params.id
      })
        .then(newMessage => {
          res.status(200).send({ success: true, msg: 'Message created successfully' })
        })
        .catch(error => {
          res.status(400).send(error);
        })
    })

  // Get messages
    .get(function(req, res) {
      Group.findById(req.params.id).then(group => {
        if (group) {
          group.getMessages().then(messages => {
            console.log(group);
            console.log(messages);
            res.status(200).send(messages);
          })
        }
        if (!group) {
          res.status(200).send({ success: false, msg: 'No messages found' });
        }
      })
        .catch(error => {
          res.status(400).send(error);
        })
    })
}
