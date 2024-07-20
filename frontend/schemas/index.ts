import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({message: "Email must be a valid email address and required"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"})
});

export const RegisterSchema = z.object({
    username: z.string({message: "Username required"}),
    email: z.string().email({message: "Email required"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"})
});