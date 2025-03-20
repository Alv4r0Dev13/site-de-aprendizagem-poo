import React from 'react';
import { Article, Course, CourseArticle, CourseModule } from './entities';
import { LinkProps } from 'react-router-dom';

export interface ContainerI {
  children: React.ReactNode;
}

export interface ComponentInputI
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  showCharCount?: boolean;
}

export interface InputLabelPropsI
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  $inputHasText?: boolean;
}

export interface ComponentButtonI
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'default' | 'success' | 'alert' | 'danger';
  outlined?: boolean;
  centered?: boolean;
}

export interface ButtonPropsI {
  $color: Required<ComponentButtonI>['color'];
  $outlined?: boolean;
  $centered?: boolean;
}

export interface ComponentButtonLinkI extends LinkProps {
  color?: 'default' | 'success' | 'alert' | 'danger';
  outlined?: boolean;
  centered?: boolean;
}

export interface ButtonLinkPropsI {
  $color: Required<ComponentButtonLinkI>['color'];
  $outlined?: boolean;
  $centered?: boolean;
}

export interface HeaderI {
  page?: string;
}

export interface PageLinkI {
  $selected?: boolean;
}

export interface ArticleRendererI {
  article: Article | null;
  isLoading: boolean;
}

export interface CourseCardI {
  course: Course;
}

export interface TabPropsI {
  $selected?: boolean;
}

export interface ClassesTabI {
  modules: CourseModule[];
  isLoading?: boolean;
  isError?: boolean;
}

export interface CourseSideMenuI {
  article: CourseArticle;
}

export interface MenuDetailsPropsI {
  $open?: boolean;
}

export interface MenuLinkI {
  $selected?: boolean;
}

export interface ImageInputI {
  imageUrl?: string;
  allowDelete?: boolean;
  onChange: (image: File | null) => void;
}

export interface ComponentTextAreaI
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
