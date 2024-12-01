import { type FC, useEffect } from 'react';
import { Header } from 'presentation/atomic-component/organism';
import { Outlet, useLocation } from 'react-router-dom';

export const MainTemplate: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={'flex flex-col h-full min-h-dvh'} id={'main'}>
      <Header />

      <main className={'flex flex-col h-full min-h-[calc(100dvh-300px)] bg-[#f5f7f8]'}>
        <Outlet />
      </main>
    </div>
  );
};
