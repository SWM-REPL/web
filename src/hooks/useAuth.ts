import { useNavigate } from 'react-router-dom';

import { useUser } from './useUser';
import { signInApi, SignInApiProps } from '../apis/user/signin';
import { signUpApi, SignUpApiProps } from '../apis/user/signup';
import { Routes } from '../routes';

interface UseAuth {
  signIn: (props: SignInApiProps) => Promise<void>;
  signUp: (props: SignUpApiProps) => Promise<void>;
  signOut: () => void;
}

export function useAuth(): UseAuth {
  const { clearUser, updateUser } = useUser();
  const navigate = useNavigate();

  async function signIn(dto: SignInApiProps) {
    const user = await signInApi(dto);

    if (user === null) {
      return;
    }
    updateUser(user);
    navigate(Routes.Home.path);
  }

  async function signUp(dto: SignUpApiProps) {
    const user = await signUpApi(dto);

    if (user === null) {
      return;
    }
    updateUser(user);
    navigate(Routes.Home.path);
  }

  function signOut() {
    clearUser();
  }

  return { signIn, signUp, signOut };
}
