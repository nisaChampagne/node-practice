///going to query the database
const db = require('../../data/dbConfig')
///^ this is where we access the database


module.exports ={

    getUsers: () => {
        return db('users')///should returns the users
    }

}