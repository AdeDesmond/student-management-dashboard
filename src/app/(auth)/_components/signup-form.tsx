"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { type ElementRef, useRef, useState, useTransition } from "react";
import { SignUpSchema } from "~/lib/schema";
import Image from "next/image";
import { Loader } from "~/components/loader";
import { SignUpNewUser } from "~/auth-actions/sign-up";
import { useRouter } from "next/navigation";
export const SignUpForm = () => {
  const resetForm = useRef<ElementRef<"form">>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTranstion] = useTransition();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setIsLoading(true);
    startTranstion(() => {
      SignUpNewUser(values)
        .then((data) => {
          console.log(data);
          if (data) {
            resetForm.current?.reset();
            setIsLoading(false);
            router.push("/sign-in");
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  return (
    <Card className="w-[35rem] ">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <div className="flex flex-col">
            <Image
              src="/svgs/signup.svg"
              alt="signup"
              width={150}
              height={150}
            />
            <h3 className="text-lg font-bold">Welcome to Edu Board</h3>
          </div>
        </CardTitle>
        <CardDescription className="text-center">
          Enjoy your experience
        </CardDescription>
        <CardContent>
          <Form {...form}>
            <form
              ref={resetForm}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email..." {...field} />
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
                      <Input
                        placeholder="Enter password..."
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password Confirm</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm your password..."
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isPending} type="submit">
                {isLoading ? <Loader /> : "Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
