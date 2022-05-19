const { read } = require('../utils/FS')
const { sign } = require('../utils/jwt')

const LOGIN = (_, res) => {
    res.render('register.ejs')
}

const LOGIN_POST = (req, res) => {
    const { user } = req     
    const allUsers = read('users.json')

    const users = allUsers.filter(e => e.role == 'user')
    .map(e => {
        e.posts = read('posts.json')
        .filter(p => p.userID == e.id)
        return e
    });

    if(user.role == 'admin') {
        res.cookie('access_token', sign({ id: user.id, role: user.role }), {
            maxAge: 40 * 1000
        })
        res.render('admin', { user: user })
    } 

    if(user.role == 'user') {
        res.cookie('access_token', sign({ id: user.id, role: user.role }), {
            maxAge: 40 * 1000
        })
        res.render('users', { user: user, users: users })
    }
}

module.exports = {
    LOGIN,
    LOGIN_POST
}