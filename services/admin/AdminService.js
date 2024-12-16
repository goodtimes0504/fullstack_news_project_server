const UserModel = require("../../models/UserModel")

const AdminService = {

    isAdmin: async (username) => {
        const result = UserModel.findOne({ username, role: 1 })
        if (result) {
            return true
        } else {
            return false
        }
    }

}
module.exports = AdminService
