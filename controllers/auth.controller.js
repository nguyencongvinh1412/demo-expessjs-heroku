const md5 = require('md5');
const db = require('../db');

module.exports.login = function (req, res) {
    res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const user = db.get('users').find({ email: email }).value();

    if (email.length <= 0 || password.length <= 0) {
        res.render('auth/login', {
            error: 'Vui lòng nhập đầy đủ thông tin vào form.',
            values: req.body
        });
        return;
    }

    if (!user) {
        res.render('auth/login', {
            error: 'Email Không tồn tại',
            values: req.body
        });
        return;
    }

    const passwodHash = md5(password);
    if (user.password != passwodHash) {
        res.render('auth/login', {
            error: 'Password và email không chính xác.',
            values: req.body
        });
        return;
    }

    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect('/users/user');
}

module.exports.logout = function (req, res) {
    var cookie = parseInt(req.signedCookies.userId);
    if (cookie) {
        res.clearCookie('userId');
    }

    res.redirect('/auth/login');
}