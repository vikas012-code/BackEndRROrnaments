import express from "express";
import {AllProductList,UploadImage,UploadProduct, DeleteProductById ,ChangeQuantityInStock , UpdateQuantityOutOfStock} from "../controller/product.controller.js"

const route = express.Router()

route.get("/", AllProductList)

route.post("/uploadimage",UploadImage)

route.post("/uploadproduct",UploadProduct)

route.delete("/deleteproductbyid",DeleteProductById)

route.patch("/changequantityinstock",ChangeQuantityInStock)
export default route;