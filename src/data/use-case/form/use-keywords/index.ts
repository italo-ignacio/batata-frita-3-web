import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
import { callToast, resolverError } from 'main/utils';
import { keywordsSchema } from 'validation/schema';
import { queryClient } from 'infra/lib';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { Keywords } from 'domain/models';
import type { KeywordsRequest } from 'validation/schema';
import type { SubmitHandler } from 'react-hook-form';
import type { formReturn } from 'domain/protocol';

interface useKeywordsProps {
  keyword?: Keywords;
  closeModal: () => void;
}

export const useKeywords = ({
  keyword,
  closeModal
}: useKeywordsProps): formReturn<KeywordsRequest> => {
  const formData = useForm<KeywordsRequest>({
    resolver: yupResolver(keywordsSchema)
  });

  const onSubmit: SubmitHandler<KeywordsRequest> = async (data) => {
    try {
      if (keyword)
        await api.put({
          body: data,
          id: keyword.id,
          route: apiPaths.keywords
        });
      else
        await api.post({
          body: data,
          route: apiPaths.keywords
        });

      callToast.success(`Palavra-chave ${keyword ? 'atualizada' : 'cadastrada'} com sucesso`);
      queryClient.invalidateQueries(QueryName.keywords);
      closeModal();
    } catch (error) {
      resolverError(error);
    }
  };

  return { ...formData, onSubmit };
};
