const express = require('express')
const router = express.Router()

// controllers
const LoginController = require('../controllers/LoginController')
const UserController = require('../controllers/UserController')
const AdminController = require('../controllers/AdminController')
const userPostController = require('../controllers/userPostController')
const signUpController = require('../controllers/userSignupController')
const UploadController = require('../controllers/UploadController')

// middlewares
const verifyRole = require('../middlewares/verifyRole')
const verifyToken = require('../middlewares/verifyToken')
const verifyRoute = require('../middlewares/verifyRoute')

router
    .get('/', verifyRoute, LoginController.LOGIN)
    .get('/users', verifyToken, UserController.USERS)
    .get('/admin', verifyToken, AdminController.ADMIN)
    .post('/register', verifyRole, LoginController.LOGIN_POST)
    .post('/signin', signUpController.USER_SIGN)
    .post('/users', userPostController.USER_POST)
    .post('/upload/:id', UploadController.UPLOAD_FILE)

module.exports = router