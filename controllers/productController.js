import { generateRandomId } from "../helpers/helperFunctons.js";
import { createProductSlug } from "../helpers/helperFunctons.js";
import fs from "fs";

// get product data mathought 
export const getProduct = (req, res) => {
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    if (productData.length === 0) {
        res.status(400).json({ massage: " NO DATA FOUND" })
        return;
    }
    res.status(200).json({ products: productData })

}


// create or post product data mathought 
export const productController = (req, res) => {

    // distracture all product data 
    const { name, regularPrice, salePrice, stock, slug } = req.body;

    if (!name || !regularPrice) {
        res.status(400).json({
            massage: "Product name and price is required"
        })
        return;
    }

    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    if (productData.find((data) => data.name === name)) {
        res.status(400).json({
            massage: "Product is already exit"
        })
        return;
    };
    const product = {
        name,
        regularPrice,
        salePrice,
        stock,
        photo: req.file.filename,
        id: generateRandomId(),
        slug: createProductSlug(name),
    }

    // push product data to json file 
    productData.push(product);
    fs.writeFileSync("db/product.json", JSON.stringify(productData));

    res.redirect("/")
};



// get single product data
export const getSingleproduct = (req, res) => {

    const { slug } = req.params;

    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    const singleProduct = productData.find((data) => data.slug === slug);

    if (singleProduct.length === 0) {
        res.status(404).json({ massage: " NO DATA FOUND" });
        return;
    }

    res.status(200).json({ singleProduct });
};


// delete single product from json db 
export const deleteSingleproduct = (req, res) => {

    const { id } = req.params;


    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    const updateData = productData.filter((data) => data.id !== id);
    fs.writeFileSync("db/product.json", JSON.stringify(updateData))

    res.redirect("/")
};



// show Product page
export const showProductpage = (req, res) => {

        // get all product data 
        const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
        res.render("product", { products: productData })
    }
    // show create product page 
export const showcrateProductpage = (req, res) => {
    res.render("create")
}

// show single product page 
export const showsingleProductpage = (req, res) => {
    const { slug } = req.params;


    // get all product data form db
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    // find single product data from db 

    const singleProduct = productData.find((data) => data.slug === slug)

    res.render("show", {
        product: singleProduct
    })
}


// eidt and update product page
export const showEditProductpage = (req, res) => {

    const { id } = req.params;


    // edit and update data 
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    // find single product data from db 

    const editProduct = productData.find((data) => data.id === id)

    res.render("edit", {
        product: editProduct
    })
}



// update product 

export const udateProductpage = (req, res) => {

    const { id } = req.params;
    const { name, regularPrice, salePrice, stock, slug, } = req.body;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    let photo_name = productData[productData.findIndex((data) => data.id == id)].photo;

    if (req.file || req.filename) {
        photo_name = req.file.filename
    }

    productData[productData.findIndex((data) => data.id == id)] = {
        name,
        regularPrice,
        salePrice,
        slug: createProductSlug(name),
        stock,
        id,
        photo: photo_name,

    };
    fs.writeFileSync("db/product.json", JSON.stringify(productData));
    res.redirect("/")
}