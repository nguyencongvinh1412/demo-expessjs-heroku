const db = require('../db');
module.exports.authValidation = function (req, res, next) {
    var cookie = parseInt(req.signedCookies.userId);

    const user = db.get('users').find({ id: cookie }).value();
    if (!user) {
        res.redirect('/auth/login');
        return;
    }
    res.locals.user = user
    next();
}