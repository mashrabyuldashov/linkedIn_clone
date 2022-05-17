const { read } = require('../utils/FS')

const USERS = (req, res) => {
    const { data: { id, role } } = req

    if(role != 'user') {
        return res.redirect('/admin')
    }

    const foundUser = read('users.json').find(e => e.id == id)

    res.render('users', { foundUser })
}

module.exports = {
    USERS
}