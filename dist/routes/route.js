"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const product_1 = require("src/controllers/product");
const controllers_1 = require("../controllers");
exports.routes = express_1.default.Router();
exports.routes.get('/timezones', controllers_1.getLocationsWithTimezones);
exports.routes.get('/products', product_1.getProducts);
//# sourceMappingURL=route.js.map