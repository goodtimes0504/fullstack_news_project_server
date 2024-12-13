var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();

/* GET users listing. */
UserRouter.post('/adminapi/user/login', UserController.login);

module.exports = UserRouter;
