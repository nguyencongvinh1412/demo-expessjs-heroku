const db = require('../db');

module.exports.index = function (req, res) {
    res.render('users/user', {
        users: db.get('users').value()
    });
}

module.exports.search = function (req, res) {
    const name = req.query.q.toLowerCase();
    const user = db.get('users').value().filter((user) => {
        return user.name.toLowerCase().indexOf(name) > -1;
    });
    res.render('users/user', {
        users: user
    });
}

module.exports.getCreate = function (req, res) {
    res.render('create/create');
}

module.exports.postCreate = function (req, res) {
    const newUser = { id: db.get('users').value().length + 1, name: req.body.name, age: req.body.age, sex: req.body.sex == 1 ? 'name' : 'nữ' }
    db.get('users').push(newUser).write();
    res.redirect('/users');
}

module.exports.deleteUser = function (req, res) {
    const id = parseInt(req.params.id);
    db.get('users').remove({ id: id }).write();
    res.redirect('/users')
}