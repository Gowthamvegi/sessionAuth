import { db } from "../utils/db";
import { loginUser, newUser, users } from "../schema/user";
import { eq, sql, or, and } from "drizzle-orm";
import bcrypt from "bcrypt";
import "dotenv/config";

export const forValidation = async (input: newUser) => {
    const [toCheckusersExists] = await db
        .select()
        .from(users)
        .where(eq(users.email, input.email));
    return toCheckusersExists;
};

export const register = async (input: newUser) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(input.password, salt);
        const newusers = await db
            .insert(users)
            .values({
                ...input,
                password: hashedPassword,
            })

        return newusers;

    } catch (error) {
        console.log(error);
    }
};

export const login = async (input: loginUser) => {
    const usersExists = await db
        .select()
        .from(users)
        .where(eq(users.email, input.email));

    if (usersExists.length === 0) {
        return { success: false, message: "users does not exist" };
    }

    const isValid = await bcrypt.compare(input.password, usersExists[0].password);
    if (!isValid) {
        return { success: false, message: "Password is incorrect" };
    }
    return usersExists;
};


