var express = require("express");
const ProductController = require("../../controllers/admin/ProductController");

var ProductRouter = express.Router();
//图片上传相关
const multer = require("multer");
const upload = multer({ dest: "public/productuploads/" });

ProductRouter.post("/adminapi/product/add", upload.single("file"), ProductController.add);
ProductRouter.delete("/adminapi/product/delete/:id", ProductController.deleteProduct);
ProductRouter.get("/adminapi/product/list", ProductController.getList);
ProductRouter.get("/adminapi/product/detail/:id", ProductController.getDetail);
ProductRouter.put("/adminapi/product/update", upload.single("file"), ProductController.updateProduct);



module.exports = ProductRouter;
