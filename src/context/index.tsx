import React from 'react';
import { ContainerI } from '../utils/types/components';
import UserProvider from './user';
import CourseProvider from './course';

const ContextProviders: React.FC<ContainerI> = ({ children }) => {
  return (
    <UserProvider>
      <CourseProvider>{children}</CourseProvider>
    </UserProvider>
  );
};

export default ContextProviders;
