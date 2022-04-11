import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// let sequelize: seq.Sequelize;
// if (process.env.DATABASE_URL) {
const sequelize = new Sequelize(
    (process.env.NODE_ENV === 'dev'
        ? process.env.DATABASE_URL_DEV
        : process.env.DATABASE_URL) || ''
);
// }

// testing connection with database
async function testConnection() {
    try {
        await sequelize.authenticate();
        // eslint-disable-next-line no-console
        console.log('Connected');
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log("Cant't connect to database");
    }
}

testConnection();

export const connect = sequelize;
