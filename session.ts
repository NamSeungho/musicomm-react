import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

export default session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url : process.env.MONGODB_URI + process.env.DB_NAME,
        ttl : 60 * 60  // 1 hour (default: 14days)
    })
});