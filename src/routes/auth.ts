import Users from '../models/user';
import { Request, ResponseToolkit } from '@hapi/hapi';
import UserAuth from '../helpers/users';
import IUsers from '../interfaces/users';

const userLoggedIn = async (request: Request, h: ResponseToolkit) => {
    try {
        const { email, password } = request.payload as IUsers;
        const getUser = await Users.User.findOne({
            where: {
                email: email,
            },
        });
        if (!getUser) {
            return h.response({ error: 'User not found' }).code(404);
        } else {
            const verifPassword = await UserAuth.verifyPassword(
                password,
                getUser.password
            );
            if (verifPassword) {
                const hashValueToken = await UserAuth.hashPassword(
                    getUser.email + ' ' + getUser.id
                );

                const token = UserAuth.calculateToken(hashValueToken);
                h.state('data', token);
                return h
                    .response(`User with ${getUser.id} connected!`)
                    .code(200);
            } else {
                return h.response({ error: 'Invalid Credentials' }).code(401);
            }
        }
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

export default { userLoggedIn };
