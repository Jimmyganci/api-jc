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
const link_1 = __importDefault(require("../models/link"));
// get all links
const getAllLinks = (_request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const links = yield link_1.default.Link.findAll();
        return links;
    }
    catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
});
// create link
const createLink = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, url, idTheme } = request.payload;
        const link = yield link_1.default.Link.create({
            title: title,
            url: url,
            idTheme: idTheme,
        });
        return {
            data: link,
            message: 'New link has been created.',
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
        path: '/links',
        handler: getAllLinks,
    },
    {
        method: 'POST',
        path: '/links',
        handler: createLink,
    },
];
