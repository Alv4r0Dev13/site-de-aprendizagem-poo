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
import { useNavigate } from 'react-router-dom';

const CourseCard: React.FC<CourseCardI> = ({ course }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() =>
        navigate(`/course/${course.id}?tab=about`, { state: { course } })
      }
    >
      {course.thumbnail ? (
        <Thumbnail src={course.thumbnail} />
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
      <Actions>{/* <ComponentButton>Ver aula 1</ComponentButton> */}</Actions>
    </Container>
  );
};

export default CourseCard;
