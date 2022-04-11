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
// import hapi type
const hapi_1 = __importDefault(require("@hapi/hapi"));
const path_1 = __importDefault(require("path"));
// create router from ./routes/index
const routes_1 = __importDefault(require("./src/routes"));
// create server hapi localhost
const server = hapi_1.default.server({
    host: 'localhost',
    port: process.env.PORT || 3000,
    routes: {
        files: {
            relativeTo: path_1.default.join(__dirname, 'static'),
        },
    },
});
// create router
server.route(routes_1.default);
// start server
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    // eslint-disable-next-line no-console
    console.log(`Server running at: ${server.info.uri}`);
});
process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
});
init();
