require('dotenv').config()
const express = require('express')
const app = express()
const userRoute = require('./route/user.route');
const authRoute = require('./route/auth.route');
const cookieParser = require('cookie-parser')
const port = 3000;

const authValidations = require('./validations/auth.validation');

app.set('view engine', 'pug');
app.set('views', './views');

// cấu hình để dùng static file
app.use(express.static('public'))
// cấu hình get cookie
app.use(cookieParser(process.env.SESSION_SECRET))

app.get('/', (req, res) => {
    res.render('index', {
        chude: 'Welcome lesson 15 Environment Variables'
    });
});

app.use('/users', authValidations.authValidation, userRoute);
app.use('/auth', authRoute);

app.listen(port, (req, res) => {
    console.log('listening on port : ' + port);
});