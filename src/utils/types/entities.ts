import { CourseType, UserType } from './enum';

export type User = {
  id: string;
  username: string;
  email: string;
  type: UserType;
  profileUrl?: string;
};

export type Author = {
  id: string;
  username: string;
  type?: UserType;
  profileUrl?: string;
};

export type LoggedUser = User & { token: string };

export type Course = {
  id: string;
  name: string;
  description: string;
  type: CourseType;
  classes: number;
  modules: string[];
  thumbnailUrl?: string;
  author?: Author;
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
  module: string;
  number: number;
};

export type BlogArticle = Article & {
  author: string | Author;
  tags: string[];
};

/**
 * (Abstract) Summarized Article Data
 */
export type AbsArticle = {
  id: string;
  title: string;
  slug: string;
  createdAt: Date;
};

/**
 * (Abstract) Summarized Course Article Data
 */
export type AbsCourseArticle = AbsArticle & {
  number: number;
};

/**
 * (Abstract) Summarized Blog Article Data
 */
export type AbsBlogArticle = AbsArticle & {
  author: Author;
};

export type CourseModule = {
  name: string;
  classes: AbsCourseArticle[];
};

export type Question = {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: Author;
  likes: string[];
  answers: number;
  comments: number;
  correctAnswer: number;
  createdAt: string;
  updatedAt: string;
};
