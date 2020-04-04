import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Jean Masvi',
        email: 'jean@gmail.com',
        phone: '5588888888',
        password_hash: '123213445',
    });

    return res.json(user);
});

export default routes;
