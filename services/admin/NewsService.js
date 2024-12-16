const NewsModel = require("../../models/NewsModel")
//services层只负责操作数据库 不负责业务逻辑 
const NewsService = {

    add: async ({ title, content, category, cover, isPublish, editTime }) => {
        if (cover) {
            return await NewsModel.create({ title, content, category, cover, isPublish, editTime })
        } else {
            return await NewsModel.create({ title, content, category, isPublish, editTime })
        }
    },
    getList: async () => {
        return await NewsModel.find()
    },
    updateNewsStatus: async ({ _id, isPublish, editTime }) => {
        return await NewsModel.updateOne({ _id }, { isPublish, editTime })
    },
    deleteNews: async ({ _id }) => {
        return await NewsModel.deleteOne({ _id })
    },
    getDetail: async ({ _id }) => {
        return await NewsModel.findOne({ _id })
    },
    updateNews: async ({ _id, title, content, category, cover, isPublish, editTime }) => {
        if (cover) {
            return await NewsModel.updateOne({ _id }, { title, content, category, cover, isPublish, editTime })
        } else {
            return await NewsModel.updateOne({ _id }, { title, content, category, isPublish, editTime })
        }
    },

}
module.exports = NewsService
