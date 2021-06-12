const express = require('express')
const routeUser = express.Router();
const userController = require('../controllers/users.controller');
const userValidation = require('../validations/user.validation');

routeUser.use(express.json()) // for parsing application/json
routeUser.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// render user list
routeUser.get('/', userController.index);

// search
routeUser.get('/search', userController.search);

// create form 
routeUser.get('/create', userController.getCreate);

// delete user
routeUser.get('/:id', userController.deleteUser);

// post user create 
routeUser.post('/create', userValidation.postCreate, userController.postCreate);

module.exports = routeUser;