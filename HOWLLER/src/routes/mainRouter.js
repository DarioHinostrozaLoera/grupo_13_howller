//Import express and router
const express = require('express');
const router = express.Router();

//Import Controllers
const mainController = require('../controllers/mainController');

/*GET Home Page*/
router.get('/', mainController.index);

module.exports = router;