import Express, { Request, Response, NextFunction } from "express";
import {
    registerUser,
    toLogin,
    userLogout,
} from "../controllers/auth-controller";
import { isAdmin, isAuthenticated } from "@/middlewares/auth";

const router = Express.Router();

router.post("/register", registerUser);
router.post("/login", toLogin);
router.get('/admin/dashboard', isAuthenticated, isAdmin, (req: Request, res: Response, next: NextFunction): void => {
    res.send('Welcome, Admin!');
});
router.post('/logout', userLogout);

export default router;
