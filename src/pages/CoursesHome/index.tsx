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

const CoursesHome: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [mainCourses, setMainCourses] = useState<Course[]>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const main = await fetchData<Course[]>('/course/type/MAIN');
      const other = await fetchData<Course[]>('/course/type/!MAIN?limit=30');
      console.log(other?.[0]);
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
            <h1>Nossos Cursos</h1>
            <p>
              A <span className="bold">Quebracódigos.com</span> foi criada com o
              intúito de ajudar o estudante de programação na jornada de
              aprendizado da Programação Orientada a Objetos.
            </p>
            <p>
              Os cursos abaixo foram criados com carinho pelo prório criador do
              site e podem ser acessados a qualquer momento, completamente de
              graça!
            </p>
            <p>Bons estudos!</p>
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

export default CoursesHome;
