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
        } else if (!getUser.admin) {
            return h
                .response({ error: "Vous n'êtes pas administrateur!" })
                .code(401);
        } else {
            const verifPassword = await UserAuth.verifyPassword(
                password,
                getUser.password
            );
            if (verifPassword) {
                // const hashValueToken = await UserAuth.hashPassword(
                //     getUser.email + ' ' + getUser.id
                // );

                const token = UserAuth.calculateToken(
                    getUser.email,
                    getUser.id
                );
                return h
                    .response(`User with ${getUser.id} connected!`)
                    .code(200)
                    .state('data', token);
            } else {
                return h.response({ error: 'Invalid Credentials' }).code(401);
            }
        }
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

const logout = async (request: Request, h: ResponseToolkit) => {
    if (request.state) return h.response('Bye').unstate('data');
};

export default { userLoggedIn, logout };
