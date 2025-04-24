import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth-routes";
import { sessionMiddleware } from "./session";


const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use(sessionMiddleware);

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.info(
        `\nApplication has been started on port ${PORT} in  environment`
    );
})