const UserService = require("../../services/admin/UserServices");
//controllers 层 处理业务逻辑 将需要的数据传递给service层 并且将返回数据给router层

const JWT = require("../../utils/JWT.js");

const UserController = {
    login: async (req, res) => {
        // console.log(req.body);
        // 调用service层 操作数据库
        const result = await UserService.login(req.body);
        //因为里面是findeone所以返回的是包含所有数据的对象或者null
        if (result) {
            // console.log(result);
            //数据库有匹配用户名和密码的数据之后返回token
            const token = JWT.generate({ _id: result._id, username: result.username }, "1d");
            res.header("Authorization", token);
            res.send({
                code: "1",
                msg: "登录成功",
                data: result,
            });
        } else {
            res.send({
                code: "-1",
                msg: "登录失败：用户名密码不匹配或账号不存在",
            });
        }
    },
};
module.exports = UserController;
