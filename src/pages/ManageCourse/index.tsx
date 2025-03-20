import React, { useEffect, useState } from 'react';

import { Container, Content, Title } from './styles';
import { useQuery } from '../../hooks/useQuery';
import { useLocation, useNavigate } from 'react-router-dom';

const ManageCourse: React.FC = () => {
  const query = useQuery();
  const [action, setAction] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const act = query.get('action');
    if (!act) {
      navigate(-1);
      return;
    }

    switch (act) {
      case 'create':
        setAction('Novo');
        break;
      case 'edit':
        setAction('Editar');
        break;
      default:
        navigate(-1);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Title>{action} curso</Title>
      </Content>
    </Container>
  );
};

export default ManageCourse;
