import { connect } from '../dbconfig';
import { DataTypes, Model, Optional } from 'sequelize';

const dbConnection = connect;

// type User
interface UserAttributes {
    id: number;
    email: string;
    password: string;
    active: boolean;
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
});

export default { User };
