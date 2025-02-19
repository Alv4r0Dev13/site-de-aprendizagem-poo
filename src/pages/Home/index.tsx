import React, { useEffect, useState } from 'react';

import {
  Container,
  Courses,
  Loading,
  MainCoursesSection,
  NoCourses,
  Section,
} from './styles';
import CourseCard from '../../components/CourseCard';
import { Course } from '../../utils/types/entities';
import { FileUnknownOutlined, LoadingOutlined } from '@ant-design/icons';
import { fetchData } from '../../utils/functions';
import { CourseType } from '../../utils/types/enum';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [mainCourses, setMainCourses] = useState<Course[]>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const main = await fetchData<Course[]>(`/course/type/${CourseType.MAIN}`);
      const other = await fetchData<Course[]>(
        `/course/type/!${CourseType.MAIN}?limit=4`,
      );
      if (main) setMainCourses(main);
      if (other) setCourses(other);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading>
          <LoadingOutlined />
        </Loading>
      ) : (
        <>
          <MainCoursesSection>
            <h1>Cursos Principais</h1>
            <p>
              Venha aprender sobre Programação Orientada a Objetos com o curso
              de POO com Java da Quebracódigos.com!
            </p>
            {mainCourses && mainCourses.length ? (
              <Courses>
                {mainCourses.map((course, i) => (
                  <CourseCard key={i} course={course} />
                ))}
              </Courses>
            ) : (
              <NoCourses>
                <FileUnknownOutlined />
                <p>Nenhum curso encontrado...</p>
              </NoCourses>
            )}
          </MainCoursesSection>
          {courses && courses.length ? (
            <Section>
              <h1>Outros cursos</h1>
              <Courses>
                {courses.map((course, i) => (
                  <CourseCard key={i} course={course} />
                ))}
              </Courses>
            </Section>
          ) : null}
        </>
      )}
    </Container>
  );
};

export default Home;
