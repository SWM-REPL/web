export type ResponseDto<T> = {
  status: string;
  message: string;
  data: T;
};
