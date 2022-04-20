import { connect } from '../dbconfig';
import { DataTypes, Model, Optional } from 'sequelize';

const dbConnection = connect;

// type Theme
interface ThemeAttributes {
    id: number;
    name: string;
    active: boolean;
}

type LinkCreationAttributes = Optional<ThemeAttributes, 'id'>;

interface ThemeInstance
    extends Model<ThemeAttributes, LinkCreationAttributes>,
        ThemeAttributes {}

// define model for user
const Theme = dbConnection.define<ThemeInstance>('themes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
    },
});

export default { Theme };
