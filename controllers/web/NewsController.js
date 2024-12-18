const NewsService = require("../../services/web/NewsService");
//controllers 层 处理业务逻辑 并处理数据 将需要的数据传递给service层 并且将返回数据给router层
// const AdminService = require("../../services/web/AdminService");
// const JWT = require("../../utils/JWT.js");
// const { getList } = require("./UserController.js");

const NewsController = {
    // getAuthorById: async (id) => {
    //     const res = await NewsService.getAuthorById(id);
    //     if (res) {
    //         return res.author
    //     } else {
    //         return ''
    //     }

    // },
    // add: async (req, res) => {
    //     // console.log(req.body, req.file);
    //     const { title, content, category, isPublish } = req.body;
    //     const author = req.payload.username; //从token中获取用户名
    //     console.log("获取的author值为" + author);
    //     const cover = req.file ? `/coveruploads/${req.file.filename}` : ''


    //     //调用service层 操作数据库 更新数据
    //     const result = await NewsService.add({ title, content, category: Number(category), cover, isPublish: Number(isPublish), editTime: new Date(), author });

    //     if (result) {
    //         res.send({
    //             code: "1",
    //             msg: `添加成功`,
    //         })
    //     }
    //     else {
    //         res.send({
    //             code: "-1",
    //             msg: `添加失败`,
    //         })
    //     }

    // },
    getList: async (req, res) => {

        const result = await NewsService.getList({ _id: req.params.id });
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
    // updateNewsStatus: async (req, res) => {
    //     const isAdmin = await AdminService.isAdmin(req.payload.username);
    //     const author = await NewsController.getAuthorById(req.body._id)
    //     console.log(req.payload.username, author, isAdmin);
    //     if (req.payload.username !== author && !isAdmin) {
    //         res.send({
    //             code: "-1",
    //             msg: `抱歉，你没有权限编辑该新闻`,
    //         })
    //         return
    //     }
    //     const result = await NewsService.updateNewsStatus({ _id: req.body._id, isPublish: Number(req.body.isPublish), editTime: new Date() });
    //     if (result) {
    //         res.send({
    //             code: "1",
    //             msg: `更新成功`,
    //         })

    //     } else {
    //         res.send({
    //             code: "-1",
    //             msg: `更新失败`,
    //         })
    //     }
    // },
    // deleteNews: async (req, res) => {
    //     const isAdmin = await AdminService.isAdmin(req.payload.username);
    //     const author = NewsController.getAuthorById(req.params.id)

    //     if (req.payload.username !== author && !isAdmin) {
    //         res.send({
    //             code: "-1",
    //             msg: `抱歉，你没有权限删除该新闻`,
    //         })
    //         return
    //     }
    //     const result = await NewsService.deleteNews({ _id: req.params.id });
    //     if (result) {
    //         res.send({
    //             code: "1",
    //             msg: `删除成功`,
    //         })

    //     } else {
    //         res.send({
    //             code: "-1",
    //             msg: `删除失败`,
    //         })
    //     }
    // },
    // getDetail: async (req, res) => {
    //     const isAdmin = await AdminService.isAdmin(req.payload.username);
    //     const author = await NewsController.getAuthorById(req.params.id)
    //     console.log(req.params.id, author, isAdmin);

    //     if (req.payload.username !== author && !isAdmin) {
    //         res.send({
    //             code: "-1",
    //             msg: `抱歉，你没有权限编辑该新闻`,

    //         })
    //         return
    //     }
    //     const result = await NewsService.getDetail({ _id: req.params.id });
    //     if (result) {
    //         res.send({
    //             code: "1",
    //             msg: `获取成功`,
    //             data: result

    //         })

    //     }
    //     else {
    //         res.send({
    //             code: "-1",
    //             msg: `获取失败`,
    //         })
    //     }
    // },
    // updateNews: async (req, res) => {
    //     const isAdmin = await AdminService.isAdmin(req.payload.username);
    //     const author = NewsController.getAuthorById(req.body._id)

    //     if (req.payload.username !== author && !isAdmin) {
    //         res.send({
    //             code: "-1",
    //             msg: `抱歉，你没有权限编辑该新闻`,
    //         })
    //         return
    //     }
    //     const result = await NewsService.updateNews({ _id: req.body._id, title: req.body.title, content: req.body.content, isPublish: Number(req.body.isPublish), category: Number(req.body.category), editTime: new Date(), cover: req.file ? `/coveruploads/${req.file.filename}` : '' });
    //     if (result) {
    //         res.send({
    //             code: "1",
    //             msg: `更新成功`,
    //         })

    //     } else {
    //         res.send({
    //             code: "-1",
    //             msg: `更新失败`,
    //         })
    //     }
    // },
    getTopList: async (req, res) => {
        const result = await NewsService.getTopList({ limit: req.query.limit || 5 });
        if (result) {
            res.send({
                code: "1",
                msg: `获取成功`,
                data: result,
            })
        }
        else {
            res.send({
                code: "-1",
                msg: `获取失败`,
            })
        }
    }
};
module.exports = NewsController;