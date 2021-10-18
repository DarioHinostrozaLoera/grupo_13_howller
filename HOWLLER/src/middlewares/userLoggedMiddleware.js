const User = require('../models/User');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    let remember = req.cookies;
    let valor = req.session.userLogged === undefined ? remember.remember : req.session.userLogged;

    if (remember.remember === undefined) {
        res.locals.isLogged = false;
    } else {
        res.locals.isLogged = true;
        res.locals.userLogged = valor;
    }

    /* 	let emailInCookie = req.cookies.userEmail;
        let userFromCookie = User.findByField('email', emailInCookie);

        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }

        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        } */

    next();
}

module.exports = userLoggedMiddleware;