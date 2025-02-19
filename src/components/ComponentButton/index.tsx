import React from 'react';

import { Button } from './styles';
import { ComponentButtonI } from '../../utils/types/components';

const ComponentButton: React.FC<ComponentButtonI> = ({
  color = 'default',
  centered = true,
  outlined,
  ...props
}) => {
  return (
    <Button
      $color={color}
      $outlined={outlined}
      $centered={centered}
      {...props}
    />
  );
};

export default ComponentButton;
