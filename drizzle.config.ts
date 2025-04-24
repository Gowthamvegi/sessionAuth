import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/schema/*",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DB_URL as string,
    },
    verbose: true,
    strict: true,
});
