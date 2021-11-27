const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator'); //aqui capturo las validaciones que vienen del Router

//base de datos JSON
const User = require('../models/User')

//base de datos MySQL
const db = require('../database/models');
const sequelize = db.sequelize;
const Usuario = db.Usuarios; 


const controller = {

    create: function (req, res) {
        return res.render('./users/register');        
    },
    createProcess: function (req, res) {
        const resultValidation = validationResult(req);
        console.log(resultValidation.mapped());
        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body //mantener la info del formulario si hubo errores
            });
        }

        Usuario.create(
            {
                nombre_USUARIOS: req.body.firstName,
                apellido_USUARIO: req.body.lastName,
                correo_USUARIOS: req.body.email,
                'contraseña_USUARIOS': bcryptjs.hashSync(req.body.password, 10),
                imagen_USUARIOS:req.body.avatar
            }
        )
        .then(()=> {
            return res.redirect('./login')})            
        .catch(error => res.send(error))
    },

    login: (req, res) => {
        return res.render('./users/login');
    },
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordOk) {
                delete userToLogin.password; //no mostrar la contraseña de ususario, incluso si esta hasheada, en la session
                req.session.userLogged = userToLogin;
                if (req.body.recordar) {
                    res.cookie('remember', userToLogin, {maxAge: 600 * 1000});
                }

                res.redirect('./userProfile')
            }

            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: "El email o la contraseña que ingresaste son incorrectos"
                    }
                }
            });


        }

        return res.render('./users/login', {
            errors: {
                email: {
                    msg: "Este email no esta registrado"
                }
            }
        });


    },
    profile: (req, res) => {
        let remember = req.cookies;
        let valor = req.session.userLogged === undefined ? remember.remember : req.session.userLogged;
        return res.render('./users/userProfile', {
            user: valor /*req.session.userLogged*/
        });
    },
    logout: (req, res) => {
        res.clearCookie('remember');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller;