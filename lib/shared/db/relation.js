"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
// user.belongsToMany(person, { through: CTable, foreignKey: "userId" });
// person.belongsTo(user, { foreignKey: "personId" })
model_1.person.belongsToMany(model_1.user, { through: model_1.CTable });
