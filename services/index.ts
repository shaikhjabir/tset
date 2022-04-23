import { app } from "../shared/lib/application";
import * as dotenv from "dotenv";

const err = dotenv.config();
if (err.error)
    throw err.error;

export { app };