const UserRepository = require('../repository/UserRepository')

class UserController {
//login

//cadastro

// listar
    async listarUser(req,res) {
        try {
            const users = await UserRepository.getAll()
            res.status(200).json(users)
        } catch (error) {
           console.log(error)
        }
    }
// 

//
}
module.exports = new UserController