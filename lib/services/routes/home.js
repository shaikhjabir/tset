"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const model_1 = require("../../shared/db/model");
const getTransaction_1 = require("../../shared/lib/getTransaction");
const createData = async (req, res, next) => {
    const transaction = await (0, getTransaction_1.getTransaction)();
    const { userName, email, password } = req.body;
    await model_1.user.create({ userName, email, password }, {
        transaction
    });
    transaction.commit();
    return {
        success: true
    };
};
const router = (0, express_1.Router)();
exports.router = router;
router.post('', createData);
