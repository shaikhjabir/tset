"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const chalk_1 = __importDefault(require("chalk"));
// import { EventEmitter } from "events";
const createData = async (req, res, next) => {
    // const transaction: Transaction = await getTransaction();
    // const { userId, userName, email, password } = req.body;
    // await user.create({ userId, userName, email, password }, {
    //     transaction
    // })
    const { personId, name } = req.body;
    console.log(chalk_1.default.red.underline("we are chalk "));
    // await person.create({ personId, name }, {
    //     transaction
    // })
    // transaction.commit();
    // res.json({ success: true })
    // transaction.commit();
    res.end();
};
const getData = async (_req, res, next) => {
    // let data: Array<Object>;
    // const data = await person.findAll({
    //     include: [user]
    // });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h2>we are success</h2>");
    res.end();
};
const router = (0, express_1.Router)();
exports.router = router;
router.post('', createData);
router.get('', getData);
