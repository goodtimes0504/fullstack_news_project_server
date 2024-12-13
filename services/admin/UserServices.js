const UserModel = require("../../models/UserModel")

const UserService = {
    login: async ({ username, password }) => {
        return UserModel.findOne({ username, password })
    }
}
module.exports = UserService