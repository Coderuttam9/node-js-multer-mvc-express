import express from "express";
import { getProduct } from "../controllers/productController.js";
import { productMulter } from "../utils/multer.js";

// router init
const router = express.Router();


// create router 
router.get("/product", productMulter, getProduct);


// export router 
export default router;