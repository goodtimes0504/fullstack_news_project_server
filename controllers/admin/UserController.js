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
                data: {
                    _id: result._id,
                    username: result.username,
                    gender: result.gender,
                    introduction: result.introduction,
                    avatar: result.avatar,
                    // avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    role: result.role,

                },
            });
        } else {
            res.send({
                code: "-1",
                msg: "登录失败：用户名密码不匹配或账号不存在",
            });
        }
    },
    upload: async (req, res) => {
        // console.log(req.body, req.file);
        const { username, gender, introduction } = req.body;
        //调用service层 操作数据库 更新数据
        const token = req.headers["authorization"].split(" ")[1]; //获取token
        const { _id } = JWT.verify(token); //解密token获取id
        // console.log(token, _id);
        const avatar = req.file ? `/avataruploads/${req.file.filename}` : ''
        const result = await UserService.upload({ _id, username, gender: Number(gender), introduction, avatar });
        if (result) {
            if (avatar) {
                res.send({
                    code: "1",
                    msg: "上传成功",
                    data: {
                        username,
                        gender: Number(gender),
                        introduction,
                        avatar,
                    }
                })
            } else {
                res.send({
                    code: "1",
                    msg: "上传成功",
                    data: {
                        username,
                        gender: Number(gender),
                        introduction,
                    }
                })

            }
        }
        else {
            res.send({
                code: "-1",
                msg: `上传失败`,
                data: {
                    result
                }
            })
        }

    }
};
module.exports = UserController;
