import express from "express";
import {
    deleteSingleproduct,
    getSingleproduct,
    productController,
    showProductpage,
    showcrateProductpage,
    showsingleProductpage,
    showEditProductpage,
    udateProductpage
} from "../controllers/productController.js";
import { productMulter } from "../utils/multer.js";

// init router 
const router = express.Router();

// EJS router 
router.get("/", showProductpage)
router.get("/create", showcrateProductpage);
router.get("/single/:slug", showsingleProductpage);
router.get("/product/:id", productMulter, deleteSingleproduct);
router.get("/edit/:id", productMulter, showEditProductpage);
router.post("/update/:id", productMulter, udateProductpage);



// create router 
router.post("/product", productMulter, productController);
router.get("/product/:slug", productMulter, getSingleproduct);
router.delete("/product/:id", productMulter, deleteSingleproduct);



// export router 
export default router