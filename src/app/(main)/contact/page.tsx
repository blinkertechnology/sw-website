"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { contactFormSchema } from "@/lib/schema/contactFormSchema";

export default function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["contact"],
    mutationFn: async (_values: z.infer<typeof contactFormSchema>) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(_values),
      });

      if (res.status >= 400) {
        throw res;
      }

      const json = await res.json();
      console.log(json);
    },

    onSuccess: () => {
      toast.success("Message sent successfully");
      form.reset();
    },
    onError: (e: Response) => {
      if (e.status === 401) {
        toast.error("You are not authorized to perform this action");
      } else {
        toast.error("An error occurred, please try again later");
      }
    },
  });

  return (
    <main className="px-4 py-20 xl:mx-auto xl:max-w-4xl">
      <div className="space-y-2 py-10 xl:space-y-4">
        <h1 className="text-4xl font-semibold xl:text-6xl">Contact Us</h1>

        <p>
          Want to collaborate with us, have an enquiry or are you looking to
          join our team? Contact us via the form below and we will get back to
          you as soon as possible.
        </p>
      </div>

      <Form {...form}>
        <form
          className="gap-4 space-y-4 text-secondary-foreground xl:grid xl:grid-cols-2 xl:space-y-0"
          onSubmit={form.handleSubmit((values) => {
            mutate(values);
          })}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input placeholder="john doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            disabled={isPending}
            className="flex items-center justify-center rounded-lg bg-accent-blue px-4 py-2 font-semibold text-white disabled:opacity-40 xl:justify-self-start"
          >
            {isPending ? (
              <Loader2Icon size={18} className="mr-2 animate-spin" />
            ) : null}
            Submit
          </button>
        </form>
      </Form>
    </main>
  );
}
