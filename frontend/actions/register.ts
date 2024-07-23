"use server"

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import axios from "axios";

export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if(!validateFields.success){
        return {error:"Invalid data!"};
    }
    
    const {username, email, password} = validateFields.data;
    const response = await axios.post(
        "http://localhost:3000/account/",
            {"username": username, "email": email, "password": password });

    return {success:"Email Sent!"};
};