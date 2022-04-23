"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = require("./home");
function api(app) {
    app.use("/", home_1.router);
}
exports.default = api;
