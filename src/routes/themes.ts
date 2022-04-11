import Themes from '../models/theme';
import { Request, ResponseToolkit } from '@hapi/hapi';

// type Themes
interface Themes {
    id: number;
    name: string;
}

// get all users
const getAllThemes = async (request: Request, h: ResponseToolkit) => {
    try {
        const themes = await Themes.Theme.findAll();

        return themes;
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

// get just one theme
const getOneTheme = async (request: Request, h: ResponseToolkit) => {
    const { id } = request.params as Themes;
    try {
        const theme = await Themes.Theme.findByPk(id);
        return theme
            ? theme
            : h.response({ error: `Theme with ${id} Not Found` }).code(404);
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

// create theme
const createTheme = async (request: Request, h: ResponseToolkit) => {
    try {
        const { name } = request.payload as Themes;
        const theme = await Themes.Theme.create({
            name: name,
        });
        return {
            data: theme,
            message: 'New theme has been created.',
        };
    } catch (error) {
        if (error instanceof Error)
            return h
                .response({
                    error: error.message,
                })
                .code(400);
    }
};

export default [
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
