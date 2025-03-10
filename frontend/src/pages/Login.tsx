import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { signInSchema } from "@/lib/zod";
import { z } from "zod";
import { ErrorContext } from "@better-fetch/fetch";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { authClient } from '../../auth-client';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
  const [pendingCredentials, setPendingCredentilas] = useState(false);
    const [pendingGithub, setPendingGithub] = useState(false);
    const router = useNavigate();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleCredentialsSignIn = async (
        values: z.infer<typeof signInSchema>
    ) => {
        await authClient.signIn.email(
            {
                email: values.email,
                password: values.password,
            },
            {
                onRequest: () => {
                    setPendingCredentilas(true);
                },
                onSuccess: async () => {
                    router("/");
                },
                onError: (ctx: ErrorContext) => {
                    console.log(ctx);
                    toast({
                        title: "Something went wrong",
                        description: ctx.error.message ?? "Something went wrong",
                        variant: "destructive",
                    });
                },
            }
        );
        setPendingCredentilas(false);
    };

    const handleSignInWithGithub = async () => {
        await authClient.signIn.social(
            {
                provider: "github",
            },
            {
                onRequest: () => {
                    setPendingGithub(true);
                },
                onSuccess: async () => {
                    router("/");
                },
                onError: (ctx: ErrorContext) => {
                    toast({
                        title: "Something went wrong",
                        description: ctx.error.message ?? "Something went wrong",
                        variant: "destructive",
                    });
                },
            }
        );
        setPendingGithub(false);
    };

  return (
    <div className="grow flex justify-center px-4 py-40">
      <Card className="w-full max-w-md dark">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-linear-to-t from-gray-800 to-white">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleCredentialsSignIn)} className='pb-10'>
              {['email', 'password'].map((field) => (
                <FormField
                  control={form.control}
                  key={field}
                  name={field as keyof z.infer<typeof signInSchema>}
                  render={({ field: fieldProps }) => (
                    <FormItem className='my-6'>
                      <FormLabel>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </FormLabel>
                      <FormControl>
                        <Input type={
                          field === "password"
                          ? "password"
                          :"email"
                        }
                        placeholder={`Enter your ${field}`}
                        {...fieldProps}
                        autoComplete={
                          field === "password"
                          ? "current-password"
                          : "email"
                        }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <LoadingButton pending={pendingCredentials}>Sign In</LoadingButton>
              </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
