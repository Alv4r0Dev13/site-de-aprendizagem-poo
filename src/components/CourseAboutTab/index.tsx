import React, { useEffect, useState } from 'react';
import { CourseCardI } from '../../utils/types/components';

import {
  Author,
  AuthorAvatar,
  AuthorData,
  AuthorType,
  Container,
  NoAvatar,
  Title,
} from './styles';
import { UserOutlined } from '@ant-design/icons';
import { UserType } from '../../utils/types/enum';
import { useUser } from '../../context/user';
import ButtonLink from '../ButtonLink';

const CourseAboutTab: React.FC<CourseCardI> = ({ course }) => {
  const { user } = useUser();
  const [type, setType] = useState('');

  useEffect(() => {
    if (!course.author?.type) return;
    switch (course.author.type) {
      case UserType.STUDENT:
        setType('Estudante');
        break;
      case UserType.TEACHER:
        setType('Professor(a)');
        break;
      case UserType.ADMIN:
        setType('Administrador');
        break;
    }
  }, [course]);

  return (
    <Container>
      {course.author && (
        <div>
          <Title>Autor</Title>
          <Author>
            {course.author.profileUrl ? (
              <AuthorAvatar src={course.author.profileUrl} />
            ) : (
              <NoAvatar>
                <UserOutlined />
              </NoAvatar>
            )}
            <AuthorData>
              <p>{course.author.username}</p>
              <AuthorType>{type}</AuthorType>
            </AuthorData>
          </Author>
        </div>
      )}
      <div>
        <Title>Descrição</Title>
        <p>{course.description}</p>
      </div>
      <div>
        <Title>Dados</Title>
        <p>Criado em {new Date(course.createdAt).toLocaleDateString()}</p>
        <p>
          Última atualização feita em{' '}
          {new Date(course.updatedAt).toLocaleDateString()}
        </p>
      </div>
      {course.author?.id === user?.id && (
        <ButtonLink
          to={'/course/manage?action=edit'}
          state={{ course }}
          centered={false}
        >
          Editar dados
        </ButtonLink>
      )}
    </Container>
  );
};

export default CourseAboutTab;
