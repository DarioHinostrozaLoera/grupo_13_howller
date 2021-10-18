function authMiddleware(req, res, next) {
    let cokie = req.session.userLogged === undefined ? req.cookies : true;
    //console.log(cokie, 'cookies') // ya tengo el valor de la cokie solo falta ver que sigue para que entre good
    if (!cokie /*req.session.userLogged*/) {  //si no tengo a nadie en sesion entonces redirigo al login
        return res.redirect('./login');
    }
    next();
}

module.exports = authMiddleware;