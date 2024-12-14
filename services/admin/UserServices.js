const UserModel = require("../../models/UserModel")

const UserService = {
    login: async ({ username, password }) => {
        return UserModel.findOne({ username, password })
    },
    upload: async ({ _id, username, introduction, avatar, gender }) => {
        if (avatar) {
            return UserModel.updateOne({ _id }, { username, introduction, avatar, gender })
        } else {
            return UserModel.updateOne({ _id }, { username, introduction, gender })
        }
    }
}
module.exports = UserService