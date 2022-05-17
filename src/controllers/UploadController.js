const path = require('path');
const { read, write } = require('../utils/FS')

const UPLOAD_FILE = (req, res) => {
    const { file } = req.files;
    const { id } = req.params;
    const users = read('users.json');

    const foundUser = users.find(e => e.id == id)
    const foundUserIndex = users.findIndex(e => e.id == id)
    file ? foundUser.profile_photo = "http://localhost:9000/" + file.name : foundUser.profile_photo

    users.splice(foundUserIndex, 1, foundUser)

    write('users.json', users)
    
    file.mv(path.join(__dirname, '/../uploads/images', file.name), (err) => {
        if (err) throw err;
        console.log("Uploded");
    });
    res.render('users', { user: foundUser });
};


module.exports = {
    UPLOAD_FILE
};