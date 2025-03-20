import React from 'react';
import { ContainerI } from '../utils/types/components';
import { Navigate, useLocation } from 'react-router-dom';

import { getStorage } from '../services/storage';
import { useUser } from '../context/user';
import api from '../services/api';

const PrivateRoute: React.FC<ContainerI> = ({ children }) => {
  const location = useLocation();
  const { user, setUser } = useUser();
  const storedUser = getStorage(process.env.REACT_APP_STORAGE_USER || 'user');
  if (!user) {
    if (storedUser) setUser(storedUser);
    else
      return (
        <Navigate
          to="/login"
          state={{ ...location.state, prev: location.pathname }}
        />
      );
  }
  api.defaults.headers.authorization = `Bearer ${user?.token || storedUser?.token}`;

  return <>{children}</>;
};

export default PrivateRoute;
