import express from "express";
import { createGelaryPhoto } from "../controllers/allGelaryPhoto.js";
import { gelaryMulter } from "../utils/multer.js";

// init router 
const router = express.Router();

// create router 
router.post("/galery", gelaryMulter, createGelaryPhoto);

// router export 
export default router;