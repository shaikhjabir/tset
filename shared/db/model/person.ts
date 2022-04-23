
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

class Person extends Model {
    public personId: number;
    public name: string;

    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date;
}

Person.init({
    personId: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true,
    modelName: "person",
    sequelize
})

export default Person;