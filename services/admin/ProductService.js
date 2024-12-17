const ProductModel = require("../../models/ProductModel")

const ProductService = {

    add: async ({ title, introduction, detail, cover }) => {
        try {
            // if (cover) {
            //     return ProductModel.create({ title, introduction, detail, cover })
            // } else {
            //     return ProductModel.create({ title, introduction, detail })
            // }
            return ProductModel.create({ title, introduction, detail, cover })
        }
        catch (err) {
            // return { error: err.toString() }
            return false
        }

    },
    getList: async () => {
        return await ProductModel.find()
    },

    deleteProduct: async ({ _id }) => {
        return await ProductModel.deleteOne({ _id })
    },
    getDetail: async ({ _id }) => {
        return await ProductModel.findOne({ _id })
    },
    updateProduct: async ({ _id, title, content, introduction, editTime, cover }) => {
        if (cover) {
            return await ProductModel.updateOne({ _id }, { title, title, content, introduction, editTime, cover })
        } else {
            return await ProductModel.updateOne({ _id }, { title, title, content, introduction, editTime })
        }
    },
}
module.exports = ProductService
