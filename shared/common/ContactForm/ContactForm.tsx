"use client";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/shared/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactForm, TContactForm } from "../../../feature/Contact/schema";
import { useMutation } from "@tanstack/react-query";
import { sendContactEmail } from "@/feature/Contact/actions";
import { toast } from "sonner";

export const ContactForm = () => {
  const form = useForm<TContactForm>({
    resolver: zodResolver(contactForm),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: TContactForm) => {
      const response = await sendContactEmail(data);
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (values: TContactForm) => {
    mutate(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="John doe" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@xyz.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="+11 123 456 789" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe Your Project Need.</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe Your Project Need."
                  className="min-h-36"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Get In Touch
        </Button>
      </form>
    </Form>
  );
};
