/* eslint-disable jsx-a11y/anchor-is-valid */
import { type FC, useEffect, useState } from 'react';

import { Avatar, Divider, IconButton, ListItemButton } from '@mui/material';
import { ExpandLess, Logout } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { SimpleMenu } from 'presentation/atomic-component/atom';
import { colors } from 'presentation/style';
import { logout } from 'store/persist/slice';
import { paths } from 'main/config';
import { useAppSelector } from 'store';
import { useDispatch } from 'react-redux';

export const Header: FC = () => {
  const { user } = useAppSelector((state) => state.persist);
  const [showUser, setShowUser] = useState(true);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect((): void => {
    if (showUser) setShowUser(false);
  }, [pathname]);

  return (
    <header>
      <div
        className={
          'flex max-w-[1300px] w-full mx-auto justify-end items-center h-[97px] bg-[#f5f7f8] px-6 tablet:px-[60px] py-6'
        }
      >
        {/* <img alt={'Fiesp Logo'} className={'mr-auto'} height={80} src={Logo} width={200} /> */}

        <SimpleMenu
          isOpen={showUser}
          openElement={
            <Avatar className={'cursor-pointer'}>{user?.name.slice(0, 1)?.toUpperCase()}</Avatar>
          }
          setIsOpen={setShowUser}
          side={'top'}
        >
          <div className={'flex flex-col max-w-[245px] text-sm text-[#444444]'}>
            <div className={'flex justify-between p-4 items-center'}>
              <div className={'flex flex-col gap-3'}>
                <h3 className={'font-bold text-xs text-black'}>{user?.name}</h3>
              </div>

              <IconButton onClick={(): void => setShowUser(false)}>
                <ExpandLess />
              </IconButton>
            </div>

            <Divider
              sx={{
                border: `1px solid ${colors.gray[200]}`
              }}
            />

            <Link
              onClick={(): void => {
                dispatch(logout());
              }}
              to={paths.login}
            >
              <ListItemButton className={'border-t-2 gap-2'}>
                <Logout
                  sx={{
                    color: colors.gray[550],
                    fontSize: '16px'
                  }}
                />
                Sair
              </ListItemButton>
            </Link>
          </div>
        </SimpleMenu>
      </div>
    </header>
  );
};
