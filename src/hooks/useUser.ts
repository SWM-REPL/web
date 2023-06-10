import { useEffect } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getUser } from '../apis/user/user';
import { queryKeys } from '../constants';
import { User } from '../entities/user';

interface UseUser {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

export function useUser(): UseUser {
  const USER_LOCALSTORAGE_KEY = 'user-info';

  const queryClient = useQueryClient();
  const { data: user } = useQuery({
    queryKey: queryKeys.user,
    queryFn: (): Promise<User | null> =>
      getUser({ userId: user?.userId ?? null }),
    initialData: () => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      return user ? JSON.parse(user) : null;
    },
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  }, [user]);

  function updateUser(user: User) {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
    queryClient.setQueryData(queryKeys.user, user);
  }

  function clearUser() {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    queryClient.removeQueries(queryKeys.user);
  }

  return { user, updateUser, clearUser };
}
