import React from 'react';

import { Container } from './styles';
import { LoadingOutlined } from '@ant-design/icons';

const Loading: React.FC = () => {
  return (
    <Container>
      <LoadingOutlined />
    </Container>
  );
};

export default Loading;
