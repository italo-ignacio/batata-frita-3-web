import { HeaderCell } from 'presentation/atomic-component/atom';
import { TableHead, TableRow } from '@mui/material';
import { colors } from 'presentation/style';
import type { FC } from 'react';

export const KeywordTableHeader: FC = () => {
  return (
    <TableHead>
      <TableRow>
        {/* <HeaderCell
          sx={{
            backgroundColor: '#FBFBFB',
            borderBottom: `2px solid ${colors.gray[300]}`
          }}
          title={'Nome'}
          width={'85%'}
        />

        <HeaderCell
          align={'center'}
          sx={{
            backgroundColor: '#FBFBFB',
            borderBottom: `2px solid ${colors.gray[300]}`
          }}
          title={'Ação'}
          width={'100px'}
        /> */}

        <HeaderCell
          minWidth={'200px'}
          sx={{
            backgroundColor: '#FBFBFB',
            borderBottom: `2px solid ${colors.gray[300]}`
          }}
          title={'Termo de busca'}
        />

        <HeaderCell
          minWidth={'200px'}
          sx={{
            backgroundColor: '#FBFBFB',
            borderBottom: `2px solid ${colors.gray[300]}`
          }}
          title={'Termo Excludente'}
          width={'30%'}
        />

        <HeaderCell
          align={'center'}
          sx={{
            backgroundColor: '#FBFBFB',
            borderBottom: `2px solid ${colors.gray[300]}`
          }}
          title={'Ação'}
          width={'180px'}
        />
      </TableRow>
    </TableHead>
  );
};
