module.exports.postCreate = function (req, res, next) {
    var error = '';
    if (req.body.name.length <= 0) {
        error = 'Vui lòng nhập đủ thông tin vào form.';
    }
    else if (req.body.age.length <= 0) {
        error = 'Vui lòng nhập đủ thông tin vào form.';
    }
    if (error.length > 0) {
        res.render('create/create', {
            error: error,
            values: req.body
        });
        return;
    }
    next();
}