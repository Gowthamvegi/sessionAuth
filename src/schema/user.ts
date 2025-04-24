import { InferSelectModel } from "drizzle-orm";
import { pgTable, serial, integer, varchar, pgEnum } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";


export const roleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable("user", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 255 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    role: roleEnum("role").notNull().default("user"),
});

export const selectUsersSchema = createSelectSchema(users);

export const newUserSchema = z.object({
    body: selectUsersSchema.pick({
        username: true,
        email: true,
        password: true,
        role: true
    })
})
export const loginUserSchema = z.object({
    body: selectUsersSchema.pick({
        username: true,
        email: true,
        password: true,
        role: true
    })
})

export type usersSchema = InferSelectModel<typeof users>;
export type newUser = z.infer<typeof newUserSchema>['body'];
export type loginUser = z.infer<typeof loginUserSchema>['body'];


