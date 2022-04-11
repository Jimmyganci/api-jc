import Links from '../models/link';
import { Request, ResponseToolkit } from '@hapi/hapi';
import { formatText } from '../utils/utils';

// type Links
interface Links {
    title: string;
    url: string;
    idTheme: number;
}

// get all links
const getAllLinks = async (_request: Request, h: ResponseToolkit) => {
    try {
        const links = await Links.Link.findAll();
        return links;
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

const getLinksByTheme = async (request: Request, h: ResponseToolkit) => {
    const { idTheme } = request.params as Links;
    try {
        const links = await Links.Link.findAll({
            where: {
                idTheme: idTheme,
            },
        });
        return links;
    } catch (error) {
        if (error instanceof Error)
            return h.response({ error: error.message }).code(400);
    }
};

// create link
const createLink = async (request: Request, h: ResponseToolkit) => {
    try {
        const { title, url, idTheme } = request.payload as Links;

        const link = await Links.Link.create({
            title: formatText(title),
            url: url,
            idTheme: idTheme,
        });
        return {
            data: link,
            message: 'New link has been created.',
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

export default { createLink, getAllLinks, getLinksByTheme };
