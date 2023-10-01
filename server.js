import express from "express";
import colors from "colors"
import dotenv from "dotenv"
import creatstudent from "./routers/studentRouter.js";
import userRouter from "./routers/uerRouter.js";
import createGelary from "./routers/gelaryRouter.js";
import product from "./routers/productRouter.js";
import getproduct from "./routers/getProductRouter.js"
import EJSLayouts from "express-ejs-layouts"

// config dotenv 
dotenv.config();
const PORT = process.env.PORT || 6464;

// express init 
const app = express();


// middleware support
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// ejs setup 
app.set("view engine", "ejs");
app.use(EJSLayouts)


// server calling here 
app.use(creatstudent)
app.use(userRouter);
app.use(createGelary)
app.use(product)
app.use(getproduct)


// server listing 
app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`.bgGreen.bgYellow)

})