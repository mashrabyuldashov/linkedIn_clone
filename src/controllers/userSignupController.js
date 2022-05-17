const { read, write } = require('../utils/FS')

const USER_SIGN = (req, res) => {
    const { name, email, password } = req.body 

    const users = read('users.json')

    users.push({ 
        id: users[users.length - 1]?.id + 1 || 1, 
        name: name, 
        email: email, 
        password: password,
        profile_photo: "",
        role: "user"  
    })

    write('users.json', users)

    res.render('users', { users: users })
}

module.exports = {
    USER_SIGN
}