import React from 'react';
import { useForm } from 'react-hook-form';

import { SignInApiProps } from '../../apis/user/signin';
import { SignIn } from '../templates/sign-in';

export function SignInPage() {
  const formData = useForm<SignInApiProps>();

  return <SignIn formData={formData} />;
}
