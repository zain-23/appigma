"use client";

import { sendModalFormEmail } from "@/shared/actions";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Slider,
} from "@/shared/common";
import { modalFormSchema, TModalForm } from "@/shared/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const ModalForm = () => {
  const form = useForm<TModalForm>({
    resolver: zodResolver(modalFormSchema),
    defaultValues: {
      budget: 0,
      description: "",
      email: "",
      full_name: "",
      phone_number: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: TModalForm) => {
      const response = await sendModalFormEmail(data);
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      toast.success(response.message);
      form.reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (values: TModalForm) => {
    mutate(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 sm:space-y-8 lg:space-y-10"
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  {...field}
                  type="text"
                  className="outline-0 border-b-2 border-primary text-lg sm:text-xl pb-2 w-full"
                  placeholder="Full Name"
                />
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
              <FormControl>
                <input
                  {...field}
                  type="email"
                  className="outline-0 border-b-2 border-primary text-lg sm:text-xl pb-2 w-full"
                  placeholder="Email Address"
                />
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
              <FormControl>
                <input
                  {...field}
                  type="tel"
                  className="outline-0 border-b-2 border-primary text-lg sm:text-xl pb-2 w-full"
                  placeholder="Phone Number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem className="gap-4 sm:gap-6">
              <FormLabel className="text-lg sm:text-xl">Budget</FormLabel>
              <FormControl>
                <div className="space-y-4">
                  <Slider
                    value={[field.value || 0]}
                    onValueChange={(value) => field.onChange(value[0])}
                    max={50000}
                    min={0}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                    <span>$0</span>
                    <span className="font-semibold text-center">
                      ${field.value?.toLocaleString() || 0}
                    </span>
                    <span>$50,000</span>
                  </div>
                </div>
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
              <FormControl>
                <textarea
                  {...field}
                  className="outline-0 border-b-2 border-primary text-lg sm:text-xl pb-2 w-full min-h-[100px] sm:min-h-[120px]"
                  placeholder="Project Brief"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full sm:w-56 h-12 sm:h-14 text-lg sm:text-xl"
          disabled={isPending}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
