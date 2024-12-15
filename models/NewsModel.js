const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsType = {
    title: String,
    content: String,
    category: Number, //分类 1是最新动态 2是典型案例 3是通知公告
    cover: String, //新闻封面图片
    isPublish: Number, //发布 0是未发布 1是已发布
    editTime: Date, //编辑时间
    //_id不用定义，因为它是主键，由数据库自动生成
};

// 修复模型定义的语法错误
const NewsModel = mongoose.model("news", new Schema(NewsType));
// 之前是 mongoose.model = ('News', new Schema(NewsType))

module.exports = NewsModel;
