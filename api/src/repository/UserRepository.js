var database = require('../database/db')


function getAll(){
    try {
        var user = database.user
        return user
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAll
}