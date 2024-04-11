import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(4, "Email must be a valid address")
    .email("Email must be a valid address"),
});
