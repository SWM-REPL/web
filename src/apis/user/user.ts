import { User } from '../../entities/user';
import { instance } from '../instance';
import { ResponseDto } from '../types';

interface GetUserProps {
  userId: string | null;
}

export async function getUser({ userId }: GetUserProps) {
  if (userId === null) {
    return null;
  }

  const { data } = await instance.get<ResponseDto<User>>(
    `/user?userId=${userId}`,
  );
  return data.data;
}
