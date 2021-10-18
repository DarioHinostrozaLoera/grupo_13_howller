function guestMiddleware(req, res, next) {
    if (req.session.userLogged) { //con esto pregunto si  ya hay algien logueado
        console.log(req.session.userLogged)
        return res.redirect('./userProfile');
    }
    next();
}

module.exports = guestMiddleware;