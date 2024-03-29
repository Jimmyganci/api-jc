import Links from './links';
import Themes from './themes';
import Users from './users';
import Auth from './auth';
import Token from '../plugins/checkToken';

//here all api's routes
//method: GET, POST, DELETE or UPDATE
//path: don't forget to write the params or query inside
//handler: function imported

export default [
    //---------------------------------
    // ----------Links routes----------
    //---------------------------------
    {
        method: 'GET',
        path: '/links',
        handler: Links.getAllLinks,
    },
    {
        method: 'GET',
        path: '/links/{id}',
        handler: Links.getOneLink,
    },
    {
        method: 'POST',
        path: '/links',
        handler: Links.createLink,
    },
    {
        method: 'GET',
        path: '/themes/links{idTheme}',
        handler: Links.getLinksByTheme,
    },
    {
        method: 'PUT',
        path: '/links/{id}',
        handler: Links.updateLink,
    },
    {
        method: 'DELETE',
        path: '/links/{id}',
        handler: Links.deleteLink,
    },
    //---------------------------------
    //--------- themes routes----------
    //---------------------------------
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
    {
        method: 'PUT',
        path: '/themes/{id}',
        handler: Themes.updateTheme,
    },
    {
        method: 'DELETE',
        path: '/themes/{id}',
        handler: Themes.deleteTheme,
    },
    //------------------------------
    //--------- users routes--------
    //------------------------------
    {
        method: 'GET',
        path: '/users',
        handler: Users.getAllUsers,
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: Users.getOneUser,
    },
    {
        method: 'PUT',
        path: '/users/{id}',
        handler: Users.updateUser,
    },
    {
        method: 'POST',
        path: '/users',
        handler: Users.createUser,
    },
    {
        method: 'DELETE',
        path: '/users/{id}',
        handler: Users.deleteUser,
    },
    //----------------------------
    //----------Auth--------------
    //----------------------------
    {
        method: 'POST',
        path: '/auth',
        handler: Auth.userLoggedIn,
    },
    {
        method: 'DELETE',
        path: '/logout',
        handler: Auth.logout,
    },
    //--------------------------
    //--------Check-------------
    //-------------------------
    {
        method: 'GET',
        path: '/token',
        handler: Token.checkToken,
    },
];
