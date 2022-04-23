"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const server = (0, express_1.default)();
server.use((0, body_parser_1.json)());
server.use((0, body_parser_1.urlencoded)());
exports.app = server;