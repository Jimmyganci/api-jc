import Themes from '../models/theme';
import { Request, ResponseToolkit } from '@hapi/hapi';
import { formatText } from '../utils/utils';

// type Themes
interface Themes {
    id: number;
    name: string;
    active: boolean;
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
        const themeExisting = await Themes.Theme.findOne({
            where: {
                name: name,
            },
        });
        if (!themeExisting) {
            const theme = await Themes.Theme.create({
                name: formatText(name),
                active: true,
            });
            return {
                data: theme,
                message: 'New theme has been created.',
            };
        } else {
            return h.response({ error: 'Theme already exist' }).code(409);
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

const updateTheme = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.params as Themes;
        const { name, active } = request.payload as Themes;
        const updatedTheme = await Themes.Theme.update(
            { active: active, name: name },
            {
                where: {
                    id: id,
                },
            }
        );
        return updatedTheme;
    } catch (error) {
        if (error instanceof Error)
            return h
                .response({
                    error: error.message,
                })
                .code(400);
    }
};

const deleteTheme = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.params as Themes;
        const themeDeleted = await Themes.Theme.destroy({
            where: {
                id: id,
            },
        });
        return themeDeleted;
    } catch (error) {
        if (error instanceof Error)
            return h
                .response({
                    error: error.message,
                })
                .code(400);
    }
};

export default {
    getAllThemes,
    getOneTheme,
    createTheme,
    updateTheme,
    deleteTheme,
};
