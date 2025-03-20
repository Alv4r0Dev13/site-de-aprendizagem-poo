import React, { useEffect, useState } from 'react';

import {
  ArticleActions,
  ArticleName,
  Container,
  Content,
  LoadingContainer,
  NextButton,
  SideContent,
} from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AbsCourseArticle,
  BlogArticle,
  CourseArticle,
} from '../../utils/types/entities';
import ArticleRenderer from '../../components/ArticleRenderer';
import { fetchData, isCourseArticle } from '../../utils/functions';
import Loading from '../../components/Loading';
import { useCourse } from '../../context/course';
import CourseSideMenu from '../../components/CourseSideMenu';
import ButtonLink from '../../components/ButtonLink';
import { getStorage } from '../../services/storage';
import { getCourseData } from '../../utils/getCourseData';

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { courseData, setCourseData } = useCourse();

  const [article, setArticle] = useState<CourseArticle | BlogArticle | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  // const [classes, setClasses] = useState<CourseArticle[]>([]);
  const [prevClass, setPrevClass] = useState<AbsCourseArticle | null>(null);
  const [nextClass, setNextClass] = useState<AbsCourseArticle | null>(null);

  useEffect(() => {
    (async () => {
      if (!slug) {
        navigate(-1);
        return;
      }
      if (article && article.slug === slug) return;
      setIsLoading(true);
      const data = await fetchData(`/article/course/slug/${slug}`);
      if (!data) {
        // navigate('/articlenotfound');
        navigate(-1);
        return;
      }
      setArticle(data);
      setIsLoading(false);
    })();
  }, [slug, navigate, courseData, article]);

  useEffect(() => {
    (async () => {
      if (!article) return;

      if (isCourseArticle(article) && !courseData) {
        const cData = await getCourseData(article.course);
        if (!cData) navigate('/');
        else {
          setCourseData(cData);
          const classes = cData.classes;
          if (article.number > 1) {
            const prev = classes[article.number - 2];
            if (prev) setPrevClass(prev);
          }
          if (article.number < classes.length) {
            const next = classes[article.number];
            if (next) setNextClass(next);
          }
        }
      }
    })();
  }, [isLoading]);

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <SideContent>
            {courseData && isCourseArticle(article) ? (
              <CourseSideMenu article={article} />
            ) : null}
          </SideContent>
          <Content>
            <ArticleName>{article?.title}</ArticleName>
            <ArticleRenderer article={article} isLoading={isLoading} />
            {isCourseArticle(article) && (
              <ArticleActions>
                {prevClass && (
                  <ButtonLink
                    to={`/article/${prevClass.slug}`}
                    // onClick={() => setArticle(null)}
                    centered={false}
                    title={`Aula anterior: ${prevClass.title}`}
                    // onClick={() => {
                    //   navigate();
                    // }}
                  >
                    Aula anterior
                  </ButtonLink>
                )}
                {nextClass && (
                  <NextButton
                    to={`/article/${nextClass.slug}`}
                    // onClick={() => setArticle(null)}
                    centered={false}
                    title={`Próxima aula: ${nextClass.title}`}
                    // onClick={() => {
                    //   navigate(`/article/${nextClass.slug}`);
                    // }}
                  >
                    Próxima aula
                  </NextButton>
                )}
              </ArticleActions>
            )}
          </Content>
          <SideContent></SideContent>
        </>
      )}
    </Container>
  );
};

export default ArticlePage;
