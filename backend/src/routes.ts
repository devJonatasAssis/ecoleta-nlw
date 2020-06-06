import express from 'express';

const routes = express.Router();

routes.get('/api/user', (req, res) => {
    return res.send('Api ta rodando');
});

export default routes;