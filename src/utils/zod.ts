import { max, min } from 'constants/searchCharacters';
import { z } from 'zod';

export const searchSchema = z.object({
  query: z
    .string()
    .min(min, 'Enter at least 2 characters')
    .max(max, 'Maximum of 50 characters'),
});
