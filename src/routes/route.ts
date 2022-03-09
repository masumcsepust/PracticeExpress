import express from "express";
import { getLocationsWithTimezones } from "../controllers/index";
import { createProduct, getProducts } from "../controllers/products";
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    }, 
    filename: (req, file, cb) => {
        cb(null,  Date.now() + '_' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
        return (new Error('only .png and jpg'))
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

export const routes = express.Router();

routes.get('/timezones', getLocationsWithTimezones);
routes.get('/products', getProducts);

routes.post('/create/product',upload.single('productImage'), createProduct);