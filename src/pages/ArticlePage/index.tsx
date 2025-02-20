import React, { useEffect, useState } from 'react';

import { ArticleName, Container, Content } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { Article } from '../../utils/types/entities';
import ArticleRenderer from '../../components/ArticleRenderer';
import { fetchData } from '../../utils/functions';
import Loading from '../../components/Loading';

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <Content>
          <ArticleName>{article?.title}</ArticleName>
          <ArticleRenderer article={article} isLoading={isLoading} />
        </Content>
      )}
    </Container>
  );
};

export default ArticlePage;
