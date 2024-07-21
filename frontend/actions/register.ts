"use server"

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";

export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if(!validateFields.success){
        return {error:"Invalid data!"};
    }
    
    const {username, email, password} = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    

    return {success:"Email Sent!"};
};