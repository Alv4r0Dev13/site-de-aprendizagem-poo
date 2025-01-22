import React from 'react';

export interface PrivateRouteI {
  children: React.ReactNode;
}

export interface UserProviderI {
  children: React.ReactNode;
}

export interface ComponentInputI
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  showCharCount?: boolean;
}

export interface ComponentButtonI
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'default' | 'success' | 'alert' | 'danger';
  outlined?: boolean;
  // children?: React.ReactNode;
}

export interface StyledButtonI {
  $color: Required<ComponentButtonI>['color'];
  $outlined?: boolean;
}

export interface HeaderI {
  page?: string;
}

export interface PageLinkI {
  $selected?: boolean;
}
