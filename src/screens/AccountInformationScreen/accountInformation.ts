import { z } from "zod";

export const accountSchema = z.object({
  name: z.string({ required_error: "name is required." }),
  email: z
    .string({ required_error: "email is required." })
    .email("email inválido"),
  password: z
    .string({ required_error: "password is required." })
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type AccountSchema = z.infer<typeof accountSchema>;
