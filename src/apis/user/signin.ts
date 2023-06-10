import { User } from '../../entities/user';
import { instance } from '../instance';
import { ResponseDto } from '../types';

interface RequestDto {
  userId: string;
  password: string;
}

interface ResponseData {
  userId: string;
  name: string;
}

export interface SignInApiProps {
  username: string;
  password: string;
}

export async function signInApi({
  username,
  password,
}: SignInApiProps): Promise<User> {
  const body: RequestDto = {
    userId: username,
    password,
  };

  const {
    data: { data: user },
  } = await instance.post<ResponseDto<ResponseData>>('/auth', body);

  return {
    id: user.userId,
    name: user.name,
  };
}
