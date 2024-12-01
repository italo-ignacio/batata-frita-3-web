import type { Pagination } from 'domain/protocol';

export interface Keywords {
  id: string;
  term: string;
  negativeTerms: string[];
  combinedTerms: string[];
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

export interface FindKeywordsQuery extends Pagination {
  content: Keywords[];
}
