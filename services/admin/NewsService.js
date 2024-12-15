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

}
module.exports = NewsService
