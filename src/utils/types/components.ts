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
  showCharCount?: boolean;
}
