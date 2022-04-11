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
const theme_1 = __importDefault(require("../models/theme"));
// get all users
const getAllThemes = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const themes = yield theme_1.default.Theme.findAll();
        return themes;
    }
    catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
});
// get just one theme
const getOneTheme = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const theme = yield theme_1.default.Theme.findByPk(id);
        return theme
            ? theme
            : h.response({ error: `Theme with ${id} Not Found` }).code(404);
    }
    catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
});
// create theme
const createTheme = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = request.payload;
        const theme = yield theme_1.default.Theme.create({
            name: name,
        });
        return {
            data: theme,
            message: 'New theme has been created.',
        };
    }
    catch (error) {
        if (error instanceof Error)
            return h
                .response({
                error: error.message,
            })
                .code(400);
    }
});
exports.default = [
    {
        method: 'GET',
        path: '/themes',
        handler: getAllThemes,
    },
    {
        method: 'GET',
        path: '/themes/{id}',
        handler: getOneTheme,
    },
    {
        method: 'POST',
        path: '/themes',
        handler: createTheme,
    },
];
