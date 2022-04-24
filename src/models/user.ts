import { connect } from '../dbconfig';
import { DataTypes, Model, Optional } from 'sequelize';

const dbConnection = connect;

// type User
interface UserAttributes {
    id: number;
    email: string;
    password: string;
    active: boolean;
    admin: boolean;
    firstname: string;
    lastname: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
        UserAttributes {}

// define model for user
const User = dbConnection.define<UserInstance>('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
    },
    admin: {
        type: DataTypes.BOOLEAN,
    },
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
});

export default { User };
