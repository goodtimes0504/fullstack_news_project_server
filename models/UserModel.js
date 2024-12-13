const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserType = {
    username: String,
    password: String,
    gender: Number, //性别 0女 1男 2保密
    introduction: String, //简介
    avatar: String, //头像
    role: Number, //角色 1管理员
};

// 修复模型定义的语法错误
const UserModel = mongoose.model("user", new Schema(UserType));
// 之前是 mongoose.model = ('user', new Schema(UserType))

module.exports = UserModel;
