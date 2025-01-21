import { UserType } from './enum';

export type User = {
  username: string;
  email: string;
  type: UserType;
  profileUrl?: string;
};

export type LoggedUser = User & { token: string };
