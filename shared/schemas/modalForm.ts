import * as z from "zod";

const modalFormSchema = z.object({
  full_name: z
    .string({ error: "Full name is required" })
    .nonempty({ error: "Full name is required" })
    .max(50, { error: "Full name must be less than 50 characters" }),
  email: z
    .email({ error: "Invalid email address" })
    .nonempty({ error: "Email is required" }),
  phone_number: z
    .string({ error: "Phone number is required" })
    .nonempty({ error: "Phone number is required" }),
  budget: z
    .number({ error: "Budget is required" })
    .min(0, { error: "Budget must be at least 0" })
    .max(50000, { error: "Budget must not exceed 50,000" }),
  description: z
    .string({ error: "Project brief is required" })
    .nonempty({ error: "Project brief is required" })
    .max(500, { error: "Project brief must be less than 500 characters" }),
});

type TModalForm = z.infer<typeof modalFormSchema>;

export { modalFormSchema };
export type { TModalForm };
