"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "User name must be at least 2 characters." }),
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters." }),
  content: z
    .string()
    .min(10, { message: "Please enter at least 10 characters for the body text." })
    .max(2000, { message: "Please enter up to 2000 characters for the body of the text." }),
});

const CreateBBSPage = () => {
    const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      title: "",
      content: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const {username,title,content} = value
    try{
        await fetch("http://localhost:3000/api/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({username,title,content})
        });
        router.push("/")
        router.refresh();
    } catch (err) {
        console.log("Error")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-1/2 px-7"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input placeholder="User Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body Text</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Body Text"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateBBSPage;