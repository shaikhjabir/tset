"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || 8000;
(0, routes_1.default)(_1.app);
_1.app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
});
