import mongodb from 'mongodb';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const MongoClient = mongodb.MongoClient;
const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export const database = async () => {
    if (!client.isConnected()) {
        await client.connect();
    }

    return await client.db(process.env.DB_NAME);
};