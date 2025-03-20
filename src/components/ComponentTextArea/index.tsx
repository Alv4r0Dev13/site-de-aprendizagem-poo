import React, { useState } from 'react';

import { CharCount, Container, Label, Text } from './styles';
import { ComponentTextAreaI } from '../../utils/types/components';

const ComponentTextArea: React.FC<ComponentTextAreaI> = ({
  label,
  maxLength,
  onChange,
  ...props
}) => {
  const [charCount, setCharCount] = useState(0);

  return (
    <Container>
      {label && <Label htmlFor="text">{label}</Label>}
      <Text
        id={'text'}
        $hasLabel={!!label}
        maxLength={maxLength}
        {...props}
        onChange={e => {
          onChange?.(e);
          setCharCount(e.currentTarget.value.length);
        }}
      />
      {maxLength && (
        <CharCount>
          {charCount}/{maxLength}
        </CharCount>
      )}
    </Container>
  );
};

export default ComponentTextArea;
