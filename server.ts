import express from 'express';
import bodyParser from 'body-parser';
import next from 'next';
import { graphqlHTTP } from 'express-graphql';
import database from './database';
import schema from './schema'
import resolver from './resolver'

const port = parseInt(process.env.PORT, 10) || 2000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();

    // Connect Database
    await database();

    // Get body data in POST request
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    // GraphQL
    server.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        graphiql: true
    }));

    // Route
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
