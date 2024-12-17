const ProductService = require("../../services/admin/ProductService");
//controllers 层 处理业务逻辑 将需要的数据传递给service层 并且将返回数据给router层

const JWT = require("../../utils/JWT.js");
const moment = require('moment-timezone');
const ProductController = {

    add: async (req, res) => {
        // console.log(req.body, req.file);
        const { title, introduction, detail } = req.body;
        //调用service层 操作数据库 更新数据
        // const editTime = moment(new Date(Date.now())).tz('Asia/Shanghai').toDate();

        // const editTime = moment.tz('Asia/Shanghai').toDate();//2024-12-17T04:49:58.459Z
        // const editTime = moment.tz("Asia/Shanghai");//Moment<2024-12-17T12:49:18+08:00>
        // const editTime = moment.tz("Asia/Shanghai").format('YYYY-MM-DD HH:mm:ss');//2024 - 12 - 17 12:51:19

        // console.log(editTime);
        const cover = req.file ? `/productuploads/${req.file.filename}` : ''
        try {

            const result = await ProductService.add({ title, introduction, detail, cover, editTime: new Date() });
            res.send({
                code: "1",
                msg: `添加成功`,

            })

        } catch (err) {
            res.send({
                code: err.errorResponse?.code || "-1",
                msg: `添加失败`,
                data: {
                    err
                }
            })
        }
    },
    getList: async (req, res) => {
        //调用service层 操作数据库 更新数据
        const result = await ProductService.getList();
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

    deleteProduct: async (req, res) => {
        //调用service层 操作数据库 更新数据
        const result = await ProductService.deleteProduct({ _id: req.params.id });
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
        //调用service层 操作数据库 更新数据
        const result = await ProductService.getDetail({ _id: req.params.id });
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
    updateProduct: async (req, res) => {

        const result = await ProductService.updateProduct({ _id: req.body._id, title: req.body.title, content: req.body.content, introduction: req.body.introduction, editTime: new Date(), cover: req.file ? `/productuploads/${req.file.filename}` : '' });
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
}


module.exports = ProductController;
