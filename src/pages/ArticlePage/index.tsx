import React, { useEffect, useState } from 'react';

import {
  ArticleActions,
  ArticleName,
  Container,
  Content,
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

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { courseData } = useCourse();

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
      setIsLoading(true);
      const article = await fetchData(`/article/course/slug/${slug}`);
      if (!article) {
        // navigate('/articlenotfound');
        return;
      }
      setArticle(article);
      setIsLoading(false);
    })();
  }, [slug, navigate]);

  useEffect(() => {
    if (!isCourseArticle(article)) return;
    if (!courseData) return;
    const classes = courseData.classes;
    if (article.number > 1) {
      const prev = classes[article.number - 2];
      if (prev) setPrevClass(prev);
    }
    if (article.number < classes.length) {
      const next = classes[article.number];
      if (next) setNextClass(next);
    }
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SideContent>{courseData && <CourseSideMenu />}</SideContent>
          <Content>
            <ArticleName>{article?.title}</ArticleName>
            <ArticleRenderer article={article} isLoading={isLoading} />
            {isCourseArticle(article) && (
              <ArticleActions>
                {prevClass && (
                  <ButtonLink
                    to={`/article/${prevClass.slug}`}
                    centered={false}
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
                    centered={false}
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
