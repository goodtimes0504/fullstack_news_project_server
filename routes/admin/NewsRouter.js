var express = require("express");
const NewsController = require("../../controllers/admin/NewsController");

var NewsRouter = express.Router();
//图片上传相关
const multer = require("multer");
const upload = multer({ dest: "public/coveruploads/" });
//新闻api相关
//涉及文件上传 所以普通post请求不行 需要使用multer中间件 处理文件上传 

NewsRouter.post("/adminapi/news/add", upload.single("file"), NewsController.add);

NewsRouter.get("/adminapi/news/list", NewsController.getList);

NewsRouter.put("/adminapi/news/publish", NewsController.updateNewsStatus)
NewsRouter.delete("/adminapi/news/delete/:id", NewsController.deleteNews);
NewsRouter.get("/adminapi/news/detail/:id", NewsController.getDetail);//获取新闻详情
NewsRouter.put("/adminapi/news/update", upload.single("file"), NewsController.updateNews);//更新新闻

//upload.single("file")中间件的作用是将前端上传的文件对象自动保存 并给req对象添加file属性，file属性中保存了文件的相关信息
// 比如文件名、文件大小、文件类型等信息 中间的file参数 就是传过来的对象里的file属性 参数名和前端传过来的对象里的file属性名要一致


module.exports = NewsRouter;
