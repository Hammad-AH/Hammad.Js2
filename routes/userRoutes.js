const express = require('express')
const {getAllUsers} = require('../controller/user.controller')

const route = express.Router();

route.get('/', getAllUsers);


module.exports = route;
