"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const route_1 = require("./routes/route");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200'
}));
app.use(express_1.default.json());
app.use(route_1.routes);
app.listen(port, () => {
    console.log(`Listing on port ${port}.`);
});
//# sourceMappingURL=app.js.map