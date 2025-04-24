import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import 'dotenv/config';


const migrateSchema = async () => {
    try {
        const connection = postgres(process.env.DB_URL as string, { max: 1 });
        await migrate(drizzle(connection), { migrationsFolder: "drizzle" });
        await connection.end();
    } catch (err) {
        console.log(err);
    }
};

migrateSchema();
