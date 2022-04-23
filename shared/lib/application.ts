import express, { Application } from "express";
import { json, urlencoded } from "body-parser";

const server: Application = express();
server.use(json());
server.use(urlencoded());

export const app = server;