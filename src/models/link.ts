import { connect } from '../dbconfig';
import { DataTypes, Model, Optional } from 'sequelize';

const dbConnection = connect;

// interface to type todo
interface LinkAttributes {
    id: number;
    title: string;
    url: string;
    idTheme: number;
}

type LinkCreationAttributes = Optional<LinkAttributes, 'id'>;

interface LinkInstance
    extends Model<LinkAttributes, LinkCreationAttributes>,
        LinkAttributes {}

// define todo's model
const Link = dbConnection.define<LinkInstance>('links', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    idTheme: {
        type: DataTypes.NUMBER,
    },
});

export default { Link };
