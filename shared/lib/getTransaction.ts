import { Transaction } from "sequelize";
import { sequelize } from "../db/sequelize";

export const getTransaction = async (): Promise<Transaction> => {
    return await sequelize.transaction();
}