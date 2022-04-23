"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTable = exports.person = exports.user = void 0;
const user_1 = __importDefault(require("./user"));
exports.user = user_1.default;
const person_1 = __importDefault(require("./person"));
exports.person = person_1.default;
const ctable_1 = __importDefault(require("./ctable"));
exports.CTable = ctable_1.default;
require("../relation");
