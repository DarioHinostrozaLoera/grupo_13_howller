// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

/*Configuracion Multer*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/users'));
    }, filename: (req, file, cb) => {
        const newFilename = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({storage});

const usersController = require('../controllers/usersController');

router.post('/', upload.single('foto'), usersController.store);

module.exports = router;