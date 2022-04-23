import { user, person, CTable } from "./model";

// user.belongsToMany(person, { through: CTable, foreignKey: "userId" });
// person.belongsTo(user, { foreignKey: "personId" })
person.belongsToMany(user, { through: CTable });