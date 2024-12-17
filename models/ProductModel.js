const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductType = {
    title: { type: String, required: true }, // 标题
    detail: { type: String }, // 内容
    introduction: { type: String }, // 简介
    cover: { type: String }, // 封面图片地址
    editTime: { type: Date, default: Date.now }, // 更新时间
};

// 修复模型定义的语法错误
const ProductModel = mongoose.model("product", new Schema(ProductType));

module.exports = ProductModel;
