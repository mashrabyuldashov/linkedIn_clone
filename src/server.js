require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const router = require('./routes/routes')
const cors = require('cors')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/uploads/images'))
app.use(cors())
app.use(fileUpload())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(router)
app.use('/*', (_, res) => res.sendStatus(404));


app.listen(9000, console.log(9000))