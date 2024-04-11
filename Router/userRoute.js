const express = require('express');
const userController = require('./../Controller/userController');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.route('/')
    .get(userController.getUsers);

router.route('/:id')
    .get(userController.getUser);

module.exports = router;