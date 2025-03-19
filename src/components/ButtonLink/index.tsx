import React from 'react';

import { BtnLink } from './styles';
import { ComponentButtonLinkI } from '../../utils/types/components';

const ButtonLink: React.FC<ComponentButtonLinkI> = ({
  color = 'default',
  centered = true,
  outlined,
  ...props
}) => {
  return (
    <BtnLink
      $color={color}
      $outlined={outlined}
      $centered={centered}
      {...props}
    />
  );
};

export default ButtonLink;
