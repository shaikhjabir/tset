"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const sequelize_1 = require("../shared/db/sequelize");
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || 8080;
if (process.env.SYNC === "true")
    sequelize_1.sequelize.sync({ alter: true });
(0, routes_1.default)(_1.app);
_1.app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
});
