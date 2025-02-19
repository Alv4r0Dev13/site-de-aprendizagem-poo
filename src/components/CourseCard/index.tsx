import React from 'react';

import {
  Actions,
  Classes,
  Container,
  Content,
  Author,
  CourseDetails,
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
          <CourseDetails>
            {course.author && <Author>{course.author.username}</Author>}
            <Classes>
              {course.classes || 'Nenhuma'} aula{course.classes > 1 ? 's' : ''}
            </Classes>
          </CourseDetails>
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
