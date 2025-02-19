import { CourseType, UserType } from './enum';

export type User = {
  username: string;
  email: string;
  type: UserType;
  profileUrl?: string;
};

export type LoggedUser = User & { token: string };

export type Course = {
  id: string;
  name: string;
  description: string;
  type: CourseType;
  classes: number;
  thumbnailUrl?: string;
  author?: {
    id: string;
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CourseArticle = Article & {
  course: string;
  number: number;
};

export type BlogArticle = Article & {
  author: string;
  tags: string[];
};
