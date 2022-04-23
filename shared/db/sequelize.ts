
import { Sequelize, Options } from "sequelize";

const option: Options = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    dialect: "mysql"
}

export const sequelize = new Sequelize(option);