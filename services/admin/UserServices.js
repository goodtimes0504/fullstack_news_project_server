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
    },
    add: async ({ username, introduction, avatar, gender, role, password }) => {
        if (avatar) {
            return UserModel.create({ username, introduction, avatar, gender, role, password })
        } else {
            return UserModel.create({ username, introduction, gender, role, password })
        }
    },
    getList: async () => {
        // return UserModel.find({}, ['username', 'role', 'introduction', 'avatar', 'gender'])
        return UserModel.find().select({ password: 0 })
    },
    deleteUser: async (id) => {
        return UserModel.deleteOne({ _id: id })
        //     UserModel.updateMany({ _id: id }, { $set: { isDelete: true } })
    },
    updateUser: async (data) => {
        return UserModel.updateOne({ _id: data._id }, data)
    }
}
module.exports = UserService
