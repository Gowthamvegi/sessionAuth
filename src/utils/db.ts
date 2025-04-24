import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { users } from '../schema/user';
import "dotenv/config";

const { Pool } = pg;
export const pool = new Pool({
    connectionString: process.env.DB_URL,
});

export const db = drizzle(pool, {
    schema: { users },
});
