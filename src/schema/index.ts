import { z } from "zod";

export const InputLinkSchema = z.object({
  title: z.string().optional(),
  url: z.string(),
});

export type InputLink = z.infer<typeof InputLinkSchema>;
