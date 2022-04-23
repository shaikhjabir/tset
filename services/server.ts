
import { app } from ".";
import { sequelize } from "../shared/db/sequelize";
import api from "./routes";

const PORT = process.env.PORT || 8080;

if (process.env.SYNC === "true")
    sequelize.sync({ alter: true });

api(app);

app.listen(PORT, () => {
    console.log("server listening on port " + PORT)
})