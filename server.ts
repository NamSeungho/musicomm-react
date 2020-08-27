import express from 'express';
import bodyParser from 'body-parser';
import next from 'next';
import { database } from './database';

const port = parseInt(process.env.PORT, 10) || 2000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();
    const db = await database();

    // const music = await db.collection('music').findOne({title: "우리 시작해도 괜찮을까요"});
    // console.log(music);

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.get('/a', (req: express.Request, res: express.Response) => {
        return app.render(req, res, '/a', req.query);
    });

    server.get('/b', (req: express.Request, res: express.Response) => {
        return app.render(req, res, '/b', req.query);
    });

    server.all('*', (req: express.Request, res: express.Response) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
