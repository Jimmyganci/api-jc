"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// let sequelize: seq.Sequelize;
// if (process.env.DATABASE_URL) {
const sequelize = new sequelize_1.Sequelize((process.env.NODE_ENV === 'dev'
    ? process.env.DATABASE_URL_DEV
    : process.env.DATABASE_URL) || '');
// }
// testing connection with database
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            // eslint-disable-next-line no-console
            console.log('Connected');
        }
        catch (err) {
            // eslint-disable-next-line no-console
            console.log("Cant't connect to database");
        }
    });
}
testConnection();
exports.connect = sequelize;
