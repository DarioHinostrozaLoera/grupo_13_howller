//Import express and router
const express = require('express');
const router = express.Router();

//Import Controllers
const mainController = require('../controllers/mainController');

/*GET Home Page*/
router.get('/', mainController.index);
/*GET Mome Page Detail Product*/
router.get('/detalle/:productId/', mainController.detail)
/*GET Login Page*/
router.get('/login', mainController.login);
/*GET Cart Page*/
router.get('/cart/:productId?/', mainController.cart);
/*GET Add Form or edit Page*/
router.get('/form', mainController.form);
/*GET Generic Categorie*/
router.get('/categorie', mainController.categorie);


module.exports = router;