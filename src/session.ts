import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import { pool } from './utils/db';

const PgSession = connectPgSimple(session);


export const sessionMiddleware = session({
    store: new PgSession({ pool }),
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        secure: false,
    },
});