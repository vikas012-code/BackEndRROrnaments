import express from "express";
import {AllProductList,UploadImage,UploadProduct} from "../controller/product.controller.js"

const route = express.Router()

route.get("/", AllProductList)

route.post("/uploadimage",UploadImage)

route.post("/uploadproduct",UploadProduct)

export default route;