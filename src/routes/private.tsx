import React from 'react';
import { PrivateRouteI } from '../utils/types/components';
import { Navigate, useLocation } from 'react-router-dom';

import { getStorage } from '../services/storage';
import { useUser } from '../context/user';

const PrivateRoute: React.FC<PrivateRouteI> = ({ children }) => {
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

  return <>{children}</>;
};

export default PrivateRoute;
