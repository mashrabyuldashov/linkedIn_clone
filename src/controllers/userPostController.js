const { read, write } = require('../utils/FS')

const USER_POST = (req, res) => {
    const { descreption, media } = req.body
    console.log(descreption, media)
    res.send("ok")
}

module.exports = {
    USER_POST
}