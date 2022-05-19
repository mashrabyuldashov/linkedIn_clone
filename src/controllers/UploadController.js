const path = require('path');
const { read, write } = require('../utils/FS')

const UPLOAD_FILE = (req, res) => {
    const { file } = req.files;

    file.mv(path.join(__dirname, '/../uploads/images', file.name), (err) => {
        if (err) throw err;
        console.log("Uploded");
    });
    
    res.redirect('/users');
};

module.exports = {
    UPLOAD_FILE
};