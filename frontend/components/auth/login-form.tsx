"use client";

import * as z from "zod";
import { startTransition, useTransition, useState } from "react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";





export const LoginForm = () => {
    const [varError, setError] = useState<string | undefined>("");
    const [varSuccess, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        } 
    });
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError('');
        setSuccess('');
    
        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);     
            })
        });
    };
    
    return (
        <CardWrapper 
            headerLabel="Welcom back"
            backbuttonLabel="Don't hava an account?"
            backbuttonHref="/auth/register"
            showSocical 
        >
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                     {...field}
                                     disabled={isPending}
                                     placeholder="jhon@wick.com"
                                     type="email">

                                     </Input>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField
                        control={form.control}
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                     {...field}
                                     disabled={isPending}
                                     placeholder="123@456"
                                     type="password">

                                     </Input>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormError message={varError}/>
                        <FormSuccess message={varSuccess}/>
                        <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full">
                            Sign In
                        </Button>
                    </div>
                </form>
            </Form>
        </CardWrapper>
    );
    }

