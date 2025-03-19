import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.js';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form.js';
import { Input } from '@/components/ui/input.js';
import LoadingButton from '@/components/LoadingButton.js';

import { signUpSchema } from '@/lib/zod.js';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useState } from 'react';
import { authClient } from 'auth-client';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';


export default function SignUp() {
    const [pending, setPending] = useState(false);
    const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

    const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
        await authClient.signUp.email(
			{
				email: values.email,
				password: values.password,
				name: values.name,
			},
			{
				onRequest: () => {
                    setPending(true);
				},
				onSuccess: () => {
                    console.log('success')
					toast.success("Account created", {
						description:
							"Your account has been created. Check your email for a verification link.",
					});
				},
				onError: (ctx) => {
                    console.log('failed')
					console.log("error", ctx);
					toast.error("Something went wrong", {
						description: ctx.error.message ?? "Something went wrong.",
					});
				},
			}
		);
		setPending(false);
    }

    return (
        <div className='grow flex justify-center items-center py-20'>
            <Card className='w-full max-w-md'>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-linear-to-t from-gray-800 to-white">Create Account</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                            {['name', 'email', 'password', 'confirmPassword'].map((field) => (
                                <FormField
                                    control={form.control}
                                    key={field}
                                    name={field as keyof z.infer<typeof signUpSchema>}
                                    render={({ field: fieldProps }) => (
                                        <FormItem>
                                            <FormLabel>
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </FormLabel>
                                            <FormControl>
                                                <Input type={
                                                    field.includes("password")
                                                    ? "password"
                                                    : field === "email"
                                                    ? "email"
                                                    : "text"
                                                } 
                                                placeholder={`Enter your ${field}`}
                                                {...fieldProps}
                                                autoComplete='off'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                            <LoadingButton pending={pending}>Sign Up</LoadingButton>
                        </form>
                    </Form>
                    <div className='mt-4 text-center text-sm'>
                        <Link to={'/sign-in'} className='text-primary hover:underline'>
                            Already have an account? Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}