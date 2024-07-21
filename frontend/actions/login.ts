"use server"
import { LoginSchema } from "@/schemas";
import axios from "axios";
import * as z from "zod";


export const login = async (values:z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    if(validateFields.success){
        const {email, password} = validateFields.data;
        const response = await axios.post(
            "http://localhost:3000/account/login",
             {"email":email,"password":password });
        console.log(response.data); 
        return {success:response.data}   
    }   

    return {error:"Invalid data!"};
};