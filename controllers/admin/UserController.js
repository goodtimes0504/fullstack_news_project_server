const UserService = require("../../services/admin/UserServices");
//controllers 层 处理业务逻辑 将需要的数据传递给service层 并且将返回数据给router层
const UserController = {
    login: async (req, res) => {
        console.log(req.body);
        // 调用service层 操作数据库
        const result = await UserService.login(req.body);
        //因为里面是findeone所以返回的是包含所有数据的对象或者null
        if (result) {
            res.send({
                code: '1',
                msg: '登录成功',
                data: result
            })
        } else {
            res.send({
                code: '-1',
                msg: '登录失败：用户名密码不匹配或账号不存在'
            })
        }
    }
}
module.exports = UserController;