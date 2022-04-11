"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = require("../dbconfig");
const sequelize_1 = require("sequelize");
const dbConnection = dbconfig_1.connect;
// define todo's model
const Link = dbConnection.define('links', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
    },
    idTheme: {
        type: sequelize_1.DataTypes.NUMBER,
    },
});
exports.default = { Link };
