import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = mongodb.MongoClient;
const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let database;

export default async () => {
    if (database) {
        return database;
    }

    if (!client.isConnected()) {
        await client.connect();
    }

    database = await client.db(process.env.DB_NAME);
    return database;
};