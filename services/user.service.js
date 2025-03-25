const {userRepository} = require("../repositories/user.repository");

class UserService {
    async getAll() {
        return await userRepository.getAll()
    }

    async create(user) {
        return await userRepository.create(user)
    }
    async getById(id){
        return await userRepository.getById(id)
    }

    async update(id, userDate) {
        return await userRepository.update(id, userDate)
    }

    async delete(id){
        return await userRepository.delete(id);
    }


}

const userService = new UserService();

module.exports = {
    userService
}