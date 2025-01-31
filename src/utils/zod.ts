import { z } from 'zod';

export const searchSchema = z.object({
  query: z
    .string()
    .min(2, 'Enter at least 2 characters')
    .max(50, 'Maximum of 50 characters'),
});
