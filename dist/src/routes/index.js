"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = __importDefault(require("./links"));
const themes_1 = __importDefault(require("./themes"));
// concat all entity to the router on server.ts
exports.default = [...links_1.default, ...themes_1.default];
