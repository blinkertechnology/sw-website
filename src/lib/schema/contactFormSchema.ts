import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Email must be a valid address"),
  company: z.string().min(1, "Company name is required"),
  website: z.union([
    z.string().url("Website url must be a valid address"),
    z.literal(""),
  ]),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .refine((value) => value.split(" ").filter(Boolean).length <= 500, {
      message: "Message must be less than 500 words",
    }),
});

