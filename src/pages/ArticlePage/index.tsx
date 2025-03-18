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
import { BlogArticle, CourseArticle } from '../../utils/types/entities';
import ArticleRenderer from '../../components/ArticleRenderer';
import { fetchData, isCourseArticle } from '../../utils/functions';
import Loading from '../../components/Loading';
import { useCourse } from '../../context/course';
import CourseSideMenu from '../../components/CourseSideMenu';
import ComponentButton from '../../components/ComponentButton';

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { courseModules } = useCourse();

  const [article, setArticle] = useState<CourseArticle | BlogArticle | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  const [classNum, setClassNum] = useState(0);
  const [prevClass, setPrevClass] = useState<CourseArticle | null>(null);
  const [nextClass, setNextClass] = useState<CourseArticle | null>(null);

  useEffect(() => {
    (async () => {
      if (!slug) {
        navigate(-1);
        return;
      }
      setIsLoading(true);
      const article = await fetchData(`/article/course/single/slug/${slug}`);
      if (!article) {
        navigate('/articlenotfound');
        return;
      }
      console.log(article);
      setArticle(article);
      setIsLoading(false);
    })();
  }, [slug, navigate]);

  useEffect(() => {
    if (!isCourseArticle(article)) return;
    if (!courseModules) return;
    const num = courseModules.reduce(
      (prev, mod) => prev + mod.classes.length,
      0,
    );
    setClassNum(num);
    if (article.number > 1){
      const prev = courseModules.find(m => m.name === article.module)?.classes[article.number - 1] || null;
      if (prev) setPrevClass(prev);
    }
    if (article.number < cla){
      const prev = courseModules.find(m => m.name === article.module)?.classes[article.number - 1] || null;
      if (prev) setPrevClass(prev);
    }
  }, [courseModules]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SideContent>{courseModules && <CourseSideMenu />}</SideContent>
          <Content>
            <ArticleName>{article?.title}</ArticleName>
            <ArticleRenderer article={article} isLoading={isLoading} />
            {isCourseArticle(article) && (
              <ArticleActions>
                {article.number > 1 && (
                  <ComponentButton centered={false} onClick={() => {navigate(`/article/${}`)}}>
                    Aula anterior
                  </ComponentButton>
                )}
                {article.number < classNum && (
                  <NextButton centered={false}>Próxima aula</NextButton>
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
