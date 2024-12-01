import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

export const AuthTemplate: FC = () => {
  return (
    <div className={'flex flex-col w-full h-full min-h-dvh'} id={'main'}>
      <main
        className={
          'flex flex-col h-full bg-gray-200 min-h-[calc(100vh-292px)] items-center justify-center py-6'
        }
      >
        <Outlet />
      </main>
    </div>
  );
};
