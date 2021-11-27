const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer'); //para poder procesar archivos que no sean sólo texto y vengan desde el fornulario

const { body } = require('express-validator');

const storage = multer.diskStorage({ // aquí es donde se va a guardar la imagen que venga desde el formulario
	destination: (req, file, cb) => {
		cb(null, './public/img/avatars'); //dirección en donde se guardaran las imagenes, en este caso en la carpeta avatars de img
	},
	filename: (req, file, cb) => { //darle un nombre único a la imagen
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage }); //metodo de multer que me permite subir el archivo

const usersController = require('../controllers/userController');

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

const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');

// Formulario de registro
router.get('/register', guestMiddleware, usersController.create);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.createProcess); //usamos multer (uploadFile) como middleware para subir un archivo (usamos .single) llamado "avatar", que es el mismo nombre que le dimos en el formulario

// Formulario de login
router.get('/login',guestMiddleware, usersController.login);

// Process login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/logout/', usersController.logout);

// Perfil de Usuario
router.get('/userProfile/',authMiddleware, usersController.profile);
module.exports = router;