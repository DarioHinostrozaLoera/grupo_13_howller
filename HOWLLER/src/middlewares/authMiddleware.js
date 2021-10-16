function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {  //si no tengo a nadie en sesion entonces redirigo al login
		return res.redirect('./login');
	}
	next();
}

module.exports = authMiddleware;