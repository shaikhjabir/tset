"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
class CTable extends sequelize_1.Model {
}
CTable.init({
    userId: {
        type: sequelize_1.DataTypes.INTEGER
    },
    personId: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    paranoid: true,
    modelName: "CTable",
    sequelize: sequelize_2.sequelize
});
exports.default = CTable;
