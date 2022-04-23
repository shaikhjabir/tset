
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

class CTable extends Model {
    public userId: number;
    public personId: number;

    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date;
}

CTable.init({
    userId: {
        type: DataTypes.INTEGER
    },
    personId: {
        type: DataTypes.INTEGER
    }
}, {
    paranoid: true,
    modelName: "CTable",
    sequelize
})

export default CTable;