import express from "express";
import { createStudent } from "../controllers/studentController.js";
import { studentsinleMulter } from "../utils/multer.js";

// init router 
const router = express.Router();


// create a router 

router.post("/student", studentsinleMulter, createStudent);


// export router 
export default router;