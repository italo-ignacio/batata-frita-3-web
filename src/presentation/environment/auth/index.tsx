import { Button } from '@mui/material';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { api } from 'infra/http';
import { apiPaths } from 'main/config';
import { resolverError } from 'main/utils';
import { setAuth } from 'store/persist/slice';
import { useDispatch } from 'react-redux';
import type { FC } from 'react';
import type { User } from 'domain/models';

export const GoogleProvider = new GoogleAuthProvider();

export const AuthContent: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (): Promise<void> => {
    try {
      const auth = getAuth();
      const response = await signInWithPopup(auth, GoogleProvider);

      const userData = {
        accessToken: await response.user.getIdToken(),
        displayName: response.user.displayName,
        email: response.user.email,
        emailVerified: response.user.emailVerified,
        googleId: response.user.uid,
        refreshToken: response.user.refreshToken
      };

      const user = await api.post<User>({ body: userData, route: apiPaths.auth });

      dispatch(
        setAuth({ accessToken: userData.accessToken, refreshToken: userData.refreshToken, user })
      );
    } catch (err) {
      resolverError(err, 'Login error');
    }
  };

  return (
    <div
      className={
        'flex flex-col gap-8 overflow-auto justify-center tablet:w-[400px] mx-6 tablet:mx-auto'
      }
    >
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
};
