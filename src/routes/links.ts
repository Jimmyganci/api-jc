import Links from '../models/link';
import { Request, ResponseToolkit } from '@hapi/hapi';

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

// create link
const createLink = async (request: Request, h: ResponseToolkit) => {
    try {
        const { title, url, idTheme } = request.payload as Links;

        const link = await Links.Link.create({
            title: title,
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

export default [
    {
        method: 'GET',
        path: '/links',
        handler: getAllLinks,
    },
    {
        method: 'POST',
        path: '/links',
        handler: createLink,
    },
];
