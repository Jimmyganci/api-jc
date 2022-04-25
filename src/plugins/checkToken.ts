import { Request, ResponseToolkit } from '@hapi/hapi';
import jwt from 'jsonwebtoken';

const checkToken = async (request: Request, h: ResponseToolkit) => {
    const tokenDecoded = jwt.decode(request.state.data);
    try {
        if (tokenDecoded === null) {
            return h.response({ error: 'You are not connected' }).code(401);
        } else {
            return tokenDecoded;
        }
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

export default { checkToken };
//
