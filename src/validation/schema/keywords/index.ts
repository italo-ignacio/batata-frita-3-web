import { array, object, string } from 'yup';
import type { InferType } from 'yup';

export const keywordsSchema = object().shape({
  combinedTerms: array().of(string().nullable()).default([]),
  negativeTerms: array().of(string().nullable()).default([]),
  publicationTypeId: string().nullable(),
  term: string().required()
});

export type KeywordsRequest = InferType<typeof keywordsSchema>;
