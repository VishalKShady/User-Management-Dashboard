import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAuthStore((state: any) => state.token);

  return token ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
