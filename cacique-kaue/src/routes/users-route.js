const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

const { getAll, get, register } = controllers.users;

router.get('/all', getAll);
router.get('/:id', get);
router.get('/register', register);

module.exports = router;