import multer from "multer";

const storage = multer.diskStorage({
    destination: (res, file, cb) => {
        if (file.fieldname === "studentPhoto") {
            cb(null, "public/studentPhoto");
        } else if (file.fieldname === "userPhoto") {
            cb(null, "public/userPhoto");
        } else if (file.fieldname === "userCv") {
            cb(null, "public/userCv");
        } else if (file.fieldname === "gelaryPhoto") {
            cb(null, "public/gelaryPhoto");
        } else if (file.fieldname === "productPhoto") {
            cb(null, "public/product")
        }
    },
    filename: (res, file, cb) => {
        cb(
            null,
            Date.now() + "_" + Math.round(Math.random()) + "_" + file.originalname
        );
    },
});

// product multer 
export const productMulter = multer({ storage }).single("productPhoto");
// student single photo manage multer
export const studentsinleMulter = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/svg"
        ) {
            cb(null, true);
        } else {
            cb(new Error(" You chose inviled file type"));
        }
    },
}).single("studentPhoto");

// gelary multipe photo manage multer
export const gelaryMulter = multer({ storage }).array("gelaryPhoto");

// user any file type manage multer
export const userMulter = multer({ storage }).fields([{
        name: "userPhoto",
        maxCount: 1,
    },
    {
        name: "userCv",
        maxCount: 1,
    },
]);