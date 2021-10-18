const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator'); //aqui capturo las validaciones que vienen del Router

const User = require('../models/User')

const controller = {
    register: (req, res) => {
        return res.render('./users/register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body //mantener la info del formulario si hubo errores
            });
        }

        let userInDB = User.findByField('email', req.body.email); //Verificar, mediante el email, si el usuario ya esta registrado

        if (userInDB) {
            return res.render('./users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10), //hashear la contraseña del usuario
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('./login');

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