import Users from '../models/user';
import { Request, ResponseToolkit } from '@hapi/hapi';
import UserAuth from '../helpers/users';
import IUsers from '../interfaces/users';

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
    const { id } = request.params as IUsers;
    try {
        const user = await Users.User.findByPk(id);
        return user
            ? { email: user.email, active: user.active }
            : h.response({ error: `User with ${id} Not Found` }).code(404);
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

// create user
const createUser = async (request: Request, h: ResponseToolkit) => {
    try {
        const { email, password } = request.payload as IUsers;
        const emailExisting = await Users.User.findOne({
            where: {
                email: email,
            },
        });
        if (!emailExisting) {
            const newPassword = await UserAuth.hashPassword(password);
            const createUser = await Users.User.create({
                email: email,
                password: newPassword,
                active: true,
            });
            return {
                id: createUser.id,
                message: 'New User has been created.',
            };
        } else {
            return h.response({ error: 'Email already exist' }).code(409);
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

// update user
const updateUser = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.params as IUsers;
        const { email, password, active } = request.payload as IUsers;
        const userExisting = await Users.User.findOne({
            where: {
                id: id,
            },
        });
        if (userExisting) {
            const newPassword = await UserAuth.hashPassword(password);

            const updatedUser = await Users.User.update(
                { email: email, password: newPassword, active: active },
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

const deleteUser = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.params as IUsers;
        const userDeleted = await Users.User.destroy({
            where: {
                id: id,
            },
        });
        return userDeleted;
    } catch (error) {
        if (error instanceof Error)
            return h
                .response({
                    error: error.message,
                })
                .code(400);
    }
};

export default { getAllUsers, getOneUser, updateUser, createUser, deleteUser };
