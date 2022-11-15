import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import SignUp from './SignUp';
import Login from './Login';
import { useAppSelector } from '../../app/hooks';
import { selectIsUserCreated } from './authSlice';

export default function Auth() {
  const isUserCreated = useAppSelector(selectIsUserCreated);

  return (
    <>
      {!isUserCreated && (
        <SignUp />
      )}
      {isUserCreated && (
        <Login />
      )}
    </>
  );
}