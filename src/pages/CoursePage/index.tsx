import React, { useEffect, useState } from 'react';

import {
  Container,
  Content,
  CourseName,
  CourseTitle,
  NoThumb,
  TabButton,
  TabContent,
  TabNavigator,
  Thumbnail,
  TitleDetails,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { Course } from '../../utils/types/entities';
import { useQuery } from '../../hooks/useQuery';
import { FileTextOutlined } from '@ant-design/icons';

const CoursePage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const course: Course | null = state.course || null;

  const [tab, setTab] = useState('');
  const query = useQuery();

  function handleChangeTab(to: 'about' | 'classes' | 'comments') {
    if (!course) return;
    if (tab === to) return;
    navigate(`/course/${course.id}?tab=${to}`, { state, replace: true });
    setTab(to);
  }

  useEffect(() => {
    if (!course) navigate(-1);
  }, []);

  useEffect(() => {
    const qTab = query.get('tab');
    if (!qTab || !['about', 'classes', 'comments'].includes(qTab)) {
      navigate(-1);
      return;
    }
    setTab(qTab);
  }, []);

  return course ? (
    <Container>
      <Content>
        {course.thumbnailUrl ? (
          <Thumbnail src={course.thumbnailUrl} />
        ) : (
          <NoThumb>
            <FileTextOutlined />
          </NoThumb>
        )}
        <CourseTitle>
          <CourseName>{course.name}</CourseName>
          <TitleDetails>
            {course.author?.username && <p>{course.author.username}</p>}
            <p>
              {course.classes || 'Nenhuma'} aula{course.classes > 1 ? 's' : ''}
            </p>
          </TitleDetails>
        </CourseTitle>
        <TabNavigator>
          <TabButton
            $selected={tab === 'about'}
            onClick={() => handleChangeTab('about')}
          >
            <p>Sobre</p>
          </TabButton>
          <TabButton
            $selected={tab === 'classes'}
            onClick={() => handleChangeTab('classes')}
          >
            <p>Aulas</p>
          </TabButton>
          {/* <TabButton
            $selected={tab === 'comments'}
            onClick={() => handleChangeTab('comments')}
          >
            <p>Comentários</p>
            <span>10</span>
          </TabButton> */}
        </TabNavigator>
        <TabContent $selected={tab === 'about'}></TabContent>
        <TabContent $selected={tab === 'classes'}></TabContent>
        {/* <TabContent $selected={tab === 'comments'}></TabContent> */}
      </Content>
    </Container>
  ) : null;
};

export default CoursePage;
