import express from 'express';

const app = express();

app.get('/api', (req, res) => {
    return res.send('Api ta rodando');
});

app.listen(3333);