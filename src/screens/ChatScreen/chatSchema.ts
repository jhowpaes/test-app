import { z } from "zod";

export const sendSchema = z.object({
  message: z.string({ required_error: "message is required." }),
});

export type SendSchema = z.infer<typeof sendSchema>;
