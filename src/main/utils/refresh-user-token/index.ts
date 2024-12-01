import { paths } from 'main/config';
import { store } from 'store';
import { updateUserToken } from 'store/persist/slice';
import type { AnyAction, Dispatch } from '@reduxjs/toolkit';
import type { NavigateFunction } from 'react-router-dom';

export const refreshUserTokenRequest = async (): Promise<{
  newToken: string;
} | null> => {
  const { accessToken, refreshToken } = store.getState().persist;

  if (!accessToken || !refreshToken || accessToken === 'null' || refreshToken === 'null')
    return null;

  try {
    const { VITE_FIREBASE_API_KEY } = import.meta.env;

    const url = 'https://securetoken.googleapis.com/v1/token';

    const validateLoginUrl =
      `${url}?` +
      `key=${VITE_FIREBASE_API_KEY}` +
      '&grant_type=refresh_token' +
      `&refresh_token=${refreshToken}`;

    const response = await fetch(validateLoginUrl);

    const { id_token: token } = (await response.json()) as { id_token: string };

    return { newToken: token };
  } catch {
    return null;
  }
};

export const refreshUserToken = async (
  dispatch: Dispatch<AnyAction>,
  navigate: NavigateFunction
): Promise<void> => {
  const newData = await refreshUserTokenRequest();

  if (newData) dispatch(updateUserToken(newData));
  else navigate(paths.login);
};
