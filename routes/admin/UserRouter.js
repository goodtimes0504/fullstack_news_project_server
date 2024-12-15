var express = require("express");
const UserController = require("../../controllers/admin/UserController");

var UserRouter = express.Router();
//图片上传相关
const multer = require("multer");
const upload = multer({ dest: "public/avataruploads/" });

/* GET users listing. */
UserRouter.post("/adminapi/user/login", UserController.login);
//upload.single("file")中间件的作用是将前端上传的文件对象转换成
UserRouter.post("/adminapi/user/upload", upload.single("file"), UserController.upload);
UserRouter.post("/adminapi/user/add", upload.single("file"), UserController.add);
UserRouter.get("/adminapi/user/list", UserController.getList);
UserRouter.delete("/adminapi/user/delete/:id", UserController.deleteUser);
UserRouter.put("/adminapi/user/update/:id", UserController.updateUser);


module.exports = UserRouter;
