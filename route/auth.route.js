const express = require('express')
const authRoute = express.Router();
const authController = require('../controllers/auth.controller');

authRoute.use(express.json()) // for parsing application/json
authRoute.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

authRoute.get('/login', authController.login);

authRoute.post('/login', authController.postLogin);

authRoute.get('/logout', authController.logout);

module.exports = authRoute;