const express = require('express')
const router = express.Router()

// controllers
const AuthController = require('../controllers/AuthController')
const UserController = require('../controllers/UserController')
const AdminController = require('../controllers/AdminController')
const UploadController = require('../controllers/UploadController')


// middlewares
const verifyRole = require('../middlewares/verifyRole')
const verifyToken = require('../middlewares/verifyToken')
const verifyRoute = require('../middlewares/verifyRoute')

router
    .get('/', verifyRoute, AuthController.LOGIN)
    .get('/users', verifyToken, UserController.USERS)
    .get('/admin', verifyToken, AdminController.ADMIN)
    .post('/register', verifyRole, AuthController.LOGIN_POST)
    .post('/upload', UploadController.UPLOAD_FILE)

module.exports = router