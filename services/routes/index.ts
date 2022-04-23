
import { Application } from "express";
import { router } from "./home";

export default function api(app: Application) {
    app.use("/", router);
}