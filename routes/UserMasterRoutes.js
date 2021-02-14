'use strict';

const express = require('express');
const UserMasterController = require('../controllers/UserMasterController');
const router = express.Router();

const {getUsers,AddUser,ValidUserLogin} = UserMasterController;

router.get('/GetUser',getUsers);
router.post('/AddUser',AddUser);
router.post('/ValidLogin',ValidUserLogin);

module.exports = {
    routes: router
}