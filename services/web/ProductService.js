const ProductModel = require("../../models/ProductModel")
//services层只负责操作数据库 不负责业务逻辑 
const ProductService = {
    getList: async ({ _id }) => {
        return await _id ? ProductModel.find({ _id }) : ProductModel.find()
    }
}
module.exports = ProductService
