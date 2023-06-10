import { User } from '../../entities/user';
import { instance } from '../instance';
import { ResponseDto } from '../types';

interface RequestDto {
  userId: string;
  password: string;
  name: string;
}

interface ResponseData {
  userId: string;
  name: string;
}

export interface SignUpApiProps {
  name: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export async function signUpApi({
  username,
  password,
  name,
}: SignUpApiProps): Promise<User | null> {
  const body: RequestDto = {
    userId: username,
    password,
    name,
  };
  const {
    status,
    data: { data: user },
  } = await instance.post<ResponseDto<ResponseData>>('/user', body);
  if (status !== 200) {
    return null;
  }

  return {
    id: user.userId,
    name: user.name,
  };
}
