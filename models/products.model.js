import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true
    },
    discount: {
      type: Number,
      default: 0,
    },
    quantity:
    {
      type:Boolean,
      required:true,
    }
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productSchema);
export default Products;