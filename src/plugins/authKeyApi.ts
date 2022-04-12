import { Request, ResponseToolkit } from '@hapi/hapi';
import dotenv from 'dotenv';
dotenv.config();

export const verifToken = function (request: Request, h: ResponseToolkit) {
    const { API_KEY } = request.query;
    if (process.env.TOKEN !== API_KEY) {
        return h.response({ code: 401, message: 'INVALID KEY' }).takeover();
    }

    return h.continue;
};
