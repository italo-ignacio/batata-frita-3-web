import { useFindQuery } from 'infra/cache/queries/default-query';
import type { FindKeywordsQuery, Keywords } from 'domain/models';
import type { UseQueryResult } from 'react-query';
import type { useFindQueryProps } from 'infra/cache/queries/default-query';

export const useFindKeywordsQuery = ({
  ...props
}: useFindQueryProps): UseQueryResult<FindKeywordsQuery> =>
  useFindQuery<FindKeywordsQuery>({ ...props, route: 'keywords' });

export const useFindOneKeywordsQuery = ({
  ...props
}: useFindQueryProps & { id: string }): UseQueryResult<Keywords> =>
  useFindQuery<Keywords>({ ...props, route: 'keywords' });
