"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = require("../dbconfig");
const sequelize_1 = require("sequelize");
const dbConnection = dbconfig_1.connect;
// define model for user
const Theme = dbConnection.define('themes', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = { Theme };
