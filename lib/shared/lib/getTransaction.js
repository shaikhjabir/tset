"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransaction = void 0;
const sequelize_1 = require("../db/sequelize");
const getTransaction = async () => {
    return await sequelize_1.sequelize.transaction();
};
exports.getTransaction = getTransaction;
