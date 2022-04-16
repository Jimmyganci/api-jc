import Users from '../models/user';
import { Request, ResponseToolkit } from '@hapi/hapi';
import UserAuth from '../helpers/users';

// type Users
interface Users {
    id: number;
    email: string;
    password: string;
}

// get all users
const getAllUsers = async (request: Request, h: ResponseToolkit) => {
    try {
        const users = await Users.User.findAll();
        return users;
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

// get just one user
const getOneUser = async (request: Request, h: ResponseToolkit) => {
    const { id } = request.params as Users;
    try {
        const user = await Users.User.findByPk(id);
        return user
            ? user
            : h.response({ error: `User with ${id} Not Found` }).code(404);
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

// create theme
const updateUser = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.params as Users;
        const { email, password } = request.payload as Users;
        const userExisting = await Users.User.findOne({
            where: {
                id: id,
            },
        });
        if (userExisting) {
            const newPassword = await UserAuth.hashPassword(password);

            const updatedUser = await Users.User.update(
                { email: email, password: newPassword },
                {
                    where: {
                        id: id,
                    },
                }
            );
            return updatedUser;
        } else {
            return h
                .response({ error: `User with id ${id} not found` })
                .code(404);
        }
    } catch (error) {
        if (error instanceof Error)
            return h
                .response({
                    error: error.message,
                })
                .code(400);
    }
};

export default { getAllUsers, getOneUser, updateUser };
