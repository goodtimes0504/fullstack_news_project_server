const NewsService = require("../../services/admin/NewsService");
//controllers 层 处理业务逻辑 并处理数据 将需要的数据传递给service层 并且将返回数据给router层

const JWT = require("../../utils/JWT.js");

const NewsController = {
    add: async (req, res) => {
        // console.log(req.body, req.file);
        const { title, content, category, isPublish } = req.body;
        const cover = req.file ? `/coveruploads/${req.file.filename}` : ''
        //调用service层 操作数据库 更新数据
        const result = await NewsService.add({ title, content, category: Number(category), cover, isPublish: Number(isPublish), editTime: new Date() });

        if (result) {
            res.send({
                code: "1",
                msg: `添加成功`,
            })
        }
        else {
            res.send({
                code: "-1",
                msg: `添加失败`,
            })
        }

    },
};
module.exports = NewsController;