
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

class User extends Model {
    public userId: number;
    public userName: string;
    public email: string;
    public password: string;

    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date;
}

User.init({
    userId: {
        type: DataTypes.INTEGER
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true,
    modelName: "user",
    sequelize
})

export default User;