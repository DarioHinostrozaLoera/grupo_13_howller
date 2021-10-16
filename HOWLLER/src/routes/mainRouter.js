// ************ Require's ************
const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const { body } = require('express-validator');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

const usersController = require('../controllers/mainController');

const validations = [
	body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]



// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// Formulario de registro
router.get('/login', mainController.register);

// Procesar el registro
router.post('/login', uploadFile.single('avatar'), validations, mainController.processRegister);

/*GET Home Page*/
router.get('/', mainController.index);

/*GET Login Page*/
router.get('/login', mainController.login);

/* Search */
router.get('/search', mainController.search);


// ************ DON'T TOUCH FROM HERE ************
module.exports = router;