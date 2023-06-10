import React from 'react';
import { useForm } from 'react-hook-form';

import { SignUpApiProps } from '../../apis/user/signup';
import { SignUp } from '../templates/sign-up';

export function SignUpPage() {
  const formData = useForm<SignUpApiProps>();

  return <SignUp formData={formData} />;
}
