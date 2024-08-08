"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(2).max(500),
});

const NewStoryPage = () => {
  const [isSubmitting, setIsSumbitting] = useState(false);
  const { userId } = useAuth();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSumbitting(true);
      toast("Story is being created ...");
      const response = await axios.post("/api/story", {
        ...values,
        userId,
      });

      if (response.status === 201) {
        toast("Story is created", { className: "bg-emerald-500 text-white" });
      }
      router.push("/story");
      router.refresh();
    } catch (error) {
      toast("Something went wrong :(", { className: "bg-rose-500 text-white" });
    } finally {
      setIsSumbitting(false);
    }
  }
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col space-y-10">
        <div>
          <h1 className="text-2xl font-semibold">Give your story a title</h1>
          <p className="text-sm text-muted-foreground">
            Name your story, don't worry you can change it later.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && <Loader className="mr-2 h-2 w-2 animate-spin" />}
              Create
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewStoryPage;
