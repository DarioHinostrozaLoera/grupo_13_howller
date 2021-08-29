//Import express and router
const express = require('express');
const router = express.Router();

//Import Controllers
const mainController = require('../controllers/mainController');

/*GET Home Page*/
router.get('/', mainController.index);
/*GET Login Page*/
router.get('/login', mainController.login);
/*GET Cart Page*/
router.get('/cart', mainController.cart);

module.exports = router;