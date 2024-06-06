import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../services/article.service';
import "./ArticleDetail.css";

export const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleById(id);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('Error fetching article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!article) {
    return <p className="error">Article not found</p>;
  }

  return (
    <div className="article-detail-container">
      <div className="article-detail">
        <div className="header">
            <h1>{article.title}</h1>
        </div>
        <img src={article.image} alt={article.title} />
        <p>{article.text}</p>
        <p className="author">Escrito por: {article.author.email}</p>
      </div>
    </div>
  );
};
