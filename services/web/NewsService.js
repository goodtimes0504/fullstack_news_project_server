const NewsModel = require("../../models/NewsModel")
//services层只负责操作数据库 不负责业务逻辑 
const NewsService = {

    getList: async ({ _id }) => {
        return await _id ? NewsModel.find({ _id, isPublish: 1 }).sort({ editTime: -1 }) : NewsModel.find({ isPublish: 1 }).sort({ editTime: -1 })
    },
    getTopList: async ({ limit }) => {
        return await NewsModel.find({ isPublish: 1 }).sort({ editTime: -1 }).limit(limit)
    },


}
module.exports = NewsService
