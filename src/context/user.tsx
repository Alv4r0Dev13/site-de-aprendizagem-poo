import { createContext, useContext, useState } from 'react';
import { NotEmptyPartial } from '../utils/types';
import { LoggedUser } from '../utils/types/entities';
import { ContainerI } from '../utils/types/components';

type UserContextType = {
  user: LoggedUser | null;
  setUser: (user: LoggedUser) => void;
  updateUser: (user: NotEmptyPartial<LoggedUser>) => void;
  removeUser: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<ContainerI> = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);

  function setUser(user: LoggedUser): void {
    setLoggedUser(user);
  }

  function updateUser(user: NotEmptyPartial<LoggedUser>): void {
    if (!loggedUser) throw new Error('User is null');
    setLoggedUser({ ...loggedUser, ...user });
  }

  function removeUser(): void {
    if (!loggedUser) return;
    setLoggedUser(null);
  }

  return (
    <UserContext.Provider
      value={{ user: loggedUser, setUser, updateUser, removeUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('User provider is not set');
  return context;
};

export default UserProvider;
