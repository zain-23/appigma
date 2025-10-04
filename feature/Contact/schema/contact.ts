import * as z from "zod";

const contactForm = z.object({
  full_name: z
    .string()
    .nonempty({ error: "Full name is required" })
    .max(15, { error: "Full name must less than 16 characters" }),
  email: z
    .email({ error: "Invalid email address" })
    .nonempty({ error: "Email is required" }),
  phone_number: z.string().nonempty({ error: "Phone number is required" }),
  description: z
    .string()
    .nonempty({ error: "Description is required" })
    .max(300, { error: "Project details must be less than 300 characters" }),
});

type TContactForm = z.infer<typeof contactForm>;

export { contactForm };
export type { TContactForm };
