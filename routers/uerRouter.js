import express from "express";
import { userController } from "../controllers/userController.js";
import { userMulter } from "../utils/multer.js";

// // init router 
const router = express.Router();


// create a router 
router.post("/user", userMulter, userController);


// export router 
export default router;