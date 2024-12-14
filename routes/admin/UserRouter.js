var express = require("express");
const UserController = require("../../controllers/admin/UserController");

var UserRouter = express.Router();
//图片上传相关
const multer = require("multer");
const upload = multer({ dest: "public/avataruploads/" });

/* GET users listing. */
UserRouter.post("/adminapi/user/login", UserController.login);
UserRouter.post("/adminapi/user/upload", upload.single("file"), UserController.upload);


module.exports = UserRouter;
