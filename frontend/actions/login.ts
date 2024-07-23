"use server"
import { LoginSchema } from "@/schemas";
import axios from "axios";
import * as z from "zod";
import { Route } from "next";


export const login = async (values:z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);
    

    if(!validateFields.success){
        return {error:"Invalid data!"};
    }   
    const {email, password} = validateFields.data;
    const response = await axios.post(
        "http://localhost:3000/account/login",
            {"email":email,"password":password });
    
    if(!response.data.token){
        return {error:"Invalid Credential"}
    }
    
    
    
    return {success:"Login Berhasil"}   
};