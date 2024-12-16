const NewsService = require("../../services/admin/NewsService");
//controllers 层 处理业务逻辑 并处理数据 将需要的数据传递给service层 并且将返回数据给router层

const JWT = require("../../utils/JWT.js");
const { getList } = require("./UserController.js");

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
    getList: async (req, res) => {

        const result = await NewsService.getList();
        if (result) {
            res.send({
                code: "1",
                msg: `获取成功`,
                data: result

            })

        }
        else {
            res.send({
                code: "-1",
                msg: `获取失败`,
            })
        }
    },
    updateNewsStatus: async (req, res) => {
        const result = await NewsService.updateNewsStatus({ _id: req.body._id, isPublish: Number(req.body.isPublish), editTime: new Date() });
        if (result) {
            res.send({
                code: "1",
                msg: `更新成功`,
            })

        } else {
            res.send({
                code: "-1",
                msg: `更新失败`,
            })
        }
    },
    deleteNews: async (req, res) => {
        const result = await NewsService.deleteNews({ _id: req.params.id });
        if (result) {
            res.send({
                code: "1",
                msg: `删除成功`,
            })

        } else {
            res.send({
                code: "-1",
                msg: `删除失败`,
            })
        }
    },
    getDetail: async (req, res) => {
        const result = await NewsService.getDetail({ _id: req.params.id });
        if (result) {
            res.send({
                code: "1",
                msg: `获取成功`,
                data: result

            })

        }
        else {
            res.send({
                code: "-1",
                msg: `获取失败`,
            })
        }
    },
    updateNews: async (req, res) => {
        const result = await NewsService.updateNews({ _id: req.body._id, title: req.body.title, content: req.body.content, isPublish: Number(req.body.isPublish), category: Number(req.body.category), editTime: new Date(), cover: req.file ? `/coveruploads/${req.file.filename}` : '' });
        if (result) {
            res.send({
                code: "1",
                msg: `更新成功`,
            })

        } else {
            res.send({
                code: "-1",
                msg: `更新失败`,
            })
        }
    },
};
module.exports = NewsController;