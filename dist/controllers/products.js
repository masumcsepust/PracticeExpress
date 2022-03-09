"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const products_1 = require("src/entities/products");
const getProducts = (req, res, next) => {
    const product = new products_1.Product();
    res.status(200).json({ product });
};
exports.getProducts = getProducts;
//# sourceMappingURL=products.js.map