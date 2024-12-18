const ProductService = require("../../services/web/ProductService");

const ProductController = {
    getList: async (req, res) => {
        const result = await ProductService.getList({ _id: req.params.id });
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
};
module.exports = ProductController;