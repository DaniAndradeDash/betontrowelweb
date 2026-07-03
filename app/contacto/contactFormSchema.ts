import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Ingresa un email corporativo válido"),
  subject: z
    .string()
    .min(3, "El asunto debe tener al menos 3 caracteres")
    .max(200, "El asunto es demasiado largo"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje es demasiado largo"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
