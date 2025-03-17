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
import {
  Course,
  CourseArticle,
  CourseModule,
} from '../../utils/types/entities';
import { useQuery } from '../../hooks/useQuery';
import { FileTextOutlined } from '@ant-design/icons';
import { useUser } from '../../context/user';
import CourseAboutTab from '../../components/CourseAboutTab';
import CourseClassesTab from '../../components/CourseClassesTab';
import { fetchData } from '../../utils/functions';

const CoursePage: React.FC = () => {
  const { user } = useUser();

  const navigate = useNavigate();
  const { state } = useLocation();
  const course: Course | null = state.course || null;

  const [tab, setTab] = useState('about');
  const query = useQuery();

  const [isAuthor, setIsAuthor] = useState(false);
  const [modules, setModules] = useState<CourseModule[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleChangeTab(to: 'about' | 'classes') {
    if (!course) return;
    if (tab === to) return;
    navigate(`/course/${course.id}?tab=${to}`, { state, replace: true });
    setTab(to);
  }

  useEffect(() => {
    if (!course) {
      navigate(-1);
      return;
    }

    if (user && course.author?.id === user.id) {
      setIsAuthor(true);
    }
  }, []);

  useEffect(() => {
    const qTab = query.get('tab');
    if (!qTab || !['about', 'classes'].includes(qTab)) {
      navigate(-1);
      return;
    }
    setTab(qTab);
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (!course) return;
      setIsLoading(true);
      const data = await fetchData<CourseArticle[]>(
        `/article/course/${course.id}`,
        // resp => {
        //   console.log(resp.data);
        //   return resp.data;
        // },
        undefined,
        reason => {
          setIsError(true);
          return null;
        },
      );
      if (data) {
        const mod = course.modules.map(m => {
          const classes = data.filter(c => c.module === m);
          return { name: m, classes };
        });
        setModules(mod);
      }
      setIsLoading(false);
    };
    (async () => {
      if (course?.modules.length) await getData();
    })();
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
        {tab === 'about' && (
          <TabContent>
            <CourseAboutTab course={course} />
          </TabContent>
        )}
        {tab === 'classes' && (
          <TabContent>
            <CourseClassesTab
              modules={modules}
              isLoading={isLoading}
              isError={isError}
            />
          </TabContent>
        )}
        {/* {tab === 'comments' && <TabContent></TabContent>} */}
      </Content>
    </Container>
  ) : null;
};

export default CoursePage;
