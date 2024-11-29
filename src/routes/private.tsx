import React from 'react';
import { PrivateRouteI } from '../utils/components';
import { Navigate, useLocation } from 'react-router-dom';

import { getStorage } from '../services/storage';

const PrivateRoute: React.FC<PrivateRouteI> = ({ children }) => {
  const location = useLocation();
  const user = getStorage('user');
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ ...location.state, prev: location.pathname }}
      />
    );
  }

  return children;
};

export default PrivateRoute;
