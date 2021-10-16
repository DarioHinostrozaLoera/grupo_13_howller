const fs = require('fs');
const path = require('path');

const bcrypt = require('bcryptjs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const listaProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    register: (req, res) => {
		return res.render('users/login_register');
	},

    processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('users/login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		return res.send('Ok, las validaciones se pasaron y no tienes errores');
	},

	login: (req, res) => {
		return res.render('users/login');
	},

	processLogin: (req, res) => {
		let archivoUsurarios = fs.readFileSync('users.json', {encoding:'utf-8'});
		let usuarios;
		if (archivoUsurarios == " "){
			usuarios = [];
		} else {
			usuarios = JSON.parse (archivoUsurarios);
		}

		for (let i = 0; i < usuarios.length; i ++){
			if (req.body.email == usuarios[i].email && bcrypt.compareSync (req.body.password, usuarios[i].password));
		}
	},

    index: (req, res) => {
        let clase = listaProductos.filter((playera) => playera.status == "nuevo");
        res.render ('./products/home', {clase:clase}) 
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    search: (req, res) => {
		let search = req.query.keywords;
		let productsToSearch = listaProductos.filter(product => product.titulo.toLowerCase().includes(search));	
		res.render('./products/results', { 
			listaProductos: productsToSearch, 
			search,
			toThousand,
		});
	}
}



module.exports = mainController;