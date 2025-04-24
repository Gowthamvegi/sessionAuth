import { users } from "../schema/user";
import { Request, Response } from "express";
import {
    register,
    login,
    forValidation,
} from "../services/auth-service";

export const registerUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const toCheckUserExists = await forValidation(req.body);
        if (toCheckUserExists) {
            res.status(400).json({
                success: false,
                message: "User already exists",
            });
            return;
        }
        const newUser = await register(req.body);
        res.status(201).json({
            success: true,
            message: "user registered successfully",
        });
    } catch (error) {
        console.log('error:', error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const toLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const userExists = await forValidation(req.body);

        if (!userExists) {
            res.status(400).json({
                success: false,
                message: "User does not exists",
            });
            return;
        }
        const user = await login(req.body);

        if (!user || !Array.isArray(user)) {
            res.status(400).json({
                success: false,
                message: "password is incorrect",
            });
            return;
        }

        req.session.user = {
            id: user[0].id,
            username: user[0].username,
            email: user[0].email,
            role: user[0].role,
        };

        res.status(200).json({
            success: true,
            message: "Successfully logged in",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const userLogout = async (req: Request, res: Response) => {
    try {
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.status(200).json({ message: 'Logged out' });
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

