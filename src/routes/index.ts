import Links from './links';
import Themes from './themes';

//here put all api's routes
//method: GET, POST, DELETE or UPDATE
//path: don't forget to write the params or query inside
//handler: function imported

export default [
    // ----------Links routes----------
    {
        method: 'GET',
        path: '/links',
        handler: Links.getAllLinks,
    },
    {
        method: 'POST',
        path: '/links',
        handler: Links.createLink,
    },
    {
        method: 'GET',
        path: '/links/{idTheme}',
        handler: Links.getLinksByTheme,
    },
    //--------- themes routes----------
    {
        method: 'GET',
        path: '/themes',
        handler: Themes.getAllThemes,
    },
    {
        method: 'GET',
        path: '/themes/{id}',
        handler: Themes.getOneTheme,
    },
    {
        method: 'POST',
        path: '/themes',
        handler: Themes.createTheme,
    },
];
