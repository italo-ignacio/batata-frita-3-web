import type { FC } from 'react';

export const AuthContent: FC = () => {
  return (
    <div
      className={
        'flex flex-col gap-8 overflow-auto justify-center tablet:w-[400px] mx-6 tablet:mx-auto'
      }
    >
      Login
    </div>
  );
};
