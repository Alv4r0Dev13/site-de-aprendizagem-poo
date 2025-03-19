import React from 'react';
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

const CourseAboutTab: React.FC<CourseCardI> = ({ course }) => {
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
              <AuthorType>{course.author.type}</AuthorType>
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
    </Container>
  );
};

export default CourseAboutTab;
