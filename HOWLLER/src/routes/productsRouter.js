// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

/*Configuracion Multer*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'));
    }, filename: (req, file, cb) => {
        const newFilename = 'multer-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);

    }
});

const upload = multer({storage});

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*GET Mome Page Detail Product*/
router.get('/detalle/:productId/', productsController.detail)
/*GET Cart Page*/
router.get('/cart/:productId?/', productsController.cart);
/*GET Add Form or edit Page*/
router.get('/form', productsController.form);
/*GET Generic Categorie*/
router.get('/categorie', productsController.categorie);

/*POST Create Product Gregorio*/

/*PUT or Patch Update product Dario*/

/*Delete delete product Oscar */

module.exports = router;