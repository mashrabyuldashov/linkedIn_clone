const { read } = require('../utils/FS')

const ADMIN = (req, res) => {
    const { data: { id, role } } = req

    if(role != 'admin') {
        return res.redirect('/users')
    }

    const user = read('users.json').find(e => e.id == id)

    res.render('admin', { user })
}

module.exports = {
    ADMIN
}