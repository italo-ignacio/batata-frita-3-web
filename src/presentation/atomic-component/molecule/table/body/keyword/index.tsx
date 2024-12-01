import { BodyCell } from 'presentation/atomic-component/atom';
import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { KeywordModal } from 'presentation/atomic-component/molecule/modal';
import { QueryName, apiPaths } from 'main/config';
import { TableBody, TableRow } from '@mui/material';
import type { FC } from 'react';
import type { FindKeywordsQuery } from 'domain/models';

interface TestProps {
  query: FindKeywordsQuery;
}

export const KeywordTableBody: FC<TestProps> = ({ query }) => {
  return (
    <TableBody className={'relative'}>
      {query?.content?.map((item) => (
        <TableRow key={item.id} className={'cursor-pointer'} hover>
          <BodyCell title={item.term} />
          <BodyCell title={item.negativeTerms?.[0]} />

          <BodyCell
            title={
              <div
                className={'flex justify-center gap-4 items-center'}
                onClick={(event): void => {
                  event.stopPropagation();
                }}
              >
                <KeywordModal keyword={item} />

                <DeleteConfirmationModal
                  hideCancelButton
                  id={item.id}
                  queryName={QueryName.keywords}
                  route={apiPaths.default}
                  successMessage={'Palavra chave deletada com sucesso'}
                  text={
                    'Tem certeza que gostaria de apagar essa palavra-chave? Após realizar esta ação, não será possível recuperar essa palavra-chave.'
                  }
                  title={'APAGAR PALAVRA-CHAVE'}
                />
              </div>
            }
          />
        </TableRow>
      ))}
    </TableBody>
  );
};
