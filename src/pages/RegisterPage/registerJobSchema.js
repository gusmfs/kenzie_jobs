import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("Campo obrigatório"),
    email: z
      .string()
      .nonempty("Campo obrigatório")
      .email("Forneça um email válido"),
    password: z
      .string()
      .nonempty("Campo obrigatório")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ter pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ter pelo menos uma letra minúscula")
      .regex(
        /(?=.*?[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/,
        "É necessário ter pelo menos um caractere especial"
      )
      .regex(/(?=.*?[0-9])/, "É necessário ter pelo menos um número"),
    confirmPassword: z
      .string()
      .nonempty("Campo obrigatório")
      .min(8, "É necessário confirmar a senha"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "A senhas não correspondem",
    path: ["confirmPassword"],
  });
