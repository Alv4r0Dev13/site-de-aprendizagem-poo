import React from 'react';

import {
  Actions,
  Classes,
  Container,
  Content,
  CourseHeader,
  Description,
  NoThumb,
  Thumbnail,
  Title,
} from './styles';
import { CourseCardI } from '../../utils/types/components';
import { FileTextOutlined } from '@ant-design/icons';
import ComponentButton from '../ComponentButton';

const CourseCard: React.FC<CourseCardI> = ({ course }) => {
  return (
    <Container>
      {course.thumbnailUrl ? (
        <Thumbnail />
      ) : (
        <NoThumb>
          <FileTextOutlined />
        </NoThumb>
      )}
      <Content>
        <CourseHeader>
          <Title>{course.name}</Title>
          <Classes>{course.classes} aulas</Classes>
        </CourseHeader>
        <Description>{course.description}</Description>
      </Content>
      <Actions>
        <ComponentButton>Ver aula 1</ComponentButton>
      </Actions>
    </Container>
  );
};

export default CourseCard;
