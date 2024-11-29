import { ReactElement } from 'react';

export interface PrivateRouteI {
  children: ReactElement<any, any> | null;
}

export interface ComponentInputI
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}
