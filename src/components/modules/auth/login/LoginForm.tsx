"use client";
import ReCAPTCHA from "react-google-recaptcha";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser, reCaptchaTokenVerification } from "@/services/AuthService";
import { toast } from "sonner";
import { loginSchema } from "./loginValidation";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Logo from "@/assets/svgs/Logo";

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const [reCaptchaStatus, setReCaptchaStatus] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirectPath");

  const handleRecaptcha = async (value: string | null) => {
    try {
      const res = await reCaptchaTokenVerification(value!);
      // console.log(res);

      if (res?.success) {
        setReCaptchaStatus(true);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      // console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        }
        else{
          router.push('/')
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5 ">
      <div className="flex items-center space-x-4 ">
        <Logo />
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">
            Welcome Back !
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center mt-5">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}
              onChange={handleRecaptcha}
            />
          </div>

          <Button
            // disabled={reCaptchaStatus ? false : true}
            type="submit"
            className="mt-5 w-full"
          >
            {isSubmitting ? "Logging.." : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Do not have any account ?
        <Link href="/register" className="text-primary">
          Register
        </Link>
      </p>
    </div>
  );
}
