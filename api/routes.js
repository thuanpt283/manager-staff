'use strict';
module.exports = function(app) {
  let UsersCtrl = require('./controllers/UsersController');
  let RecordsCtrl = require('./controllers/RecordsController');
  // todoList Routes
  app.route('/', function(req, res){
    res.redirect('/users');
 });

  app.route('/users')
    .get(UsersCtrl.get)
    // .post(UsersCtrl.store);

  app.route('/users/:usersId')
    .get(UsersCtrl.detail)
    // .put(UsersCtrl.update)
    // .delete(UsersCtrl.delete);

  app.route('/records')
    .get(RecordsCtrl.get)
};