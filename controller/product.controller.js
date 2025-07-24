import Products from "../models/products.model.js"
import { v2 as cloudinary } from 'cloudinary';

export async function AllProductList(req,res) {
    const data = await Products.find({})
    res.json(data)
}


export async function DeleteProductById(req ,res) {
  const {_id}= req.body;
  try{
      const result = await Products.deleteOne({_id:_id});
      console.log(result)
      res.status(200).send(result);
    }
    catch(err){
      console.log(err)
      res.status(500).json(err);
    }
}


export async function ChangeQuantityInStock(req ,res) {
  const {_id,quantity}= req.body;
  try {
    const result = await Products.findByIdAndUpdate(
      _id,
      { $set: { quantity: !quantity} },
      { new: true }
    );
   
    res.json(result)
  } catch (err) {
    console.error('Error ', err);
  }
}


export async function UploadImage(req,res) {

    //Configuration
    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret
    });

    // console.log(req,req.body,req.files)
    
    // Upload an image
    try{
      //console.log(req.files.files)
      const file=req.files.files
      const uploadResult = await cloudinary.uploader.upload(file.tempFilePath ,(err,result)=>{
        console.log(result)
        
      })
      res.status(200).json(uploadResult.url);
    }
   catch (error) {
      console.error(error);
      res.status(400).json(error,req);
    }
  
};

export async function UploadProduct(req,res) {
    // Upload an image
    try{
      // console.log(req.files.image)
      const req_Data = req.body;

      const data = new Products({
        name: req_Data.name,
        image: req_Data.image,
        price: req_Data.price,
        description: req_Data.description,
        category: req_Data.category,
        discount: req_Data.discount,
        quantity:req_Data.quantity
      });
  
      
      const result = await data.save();
      console.log(data)
      res.status(200).send({result});
      
    }
   catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  
};