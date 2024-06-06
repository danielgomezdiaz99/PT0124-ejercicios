import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import './BlogArticle.css';

export const BlogArticle = ({ article, isFavorite, onToggleFavorite, showFavoriteIcon }) => {
  const navigate = useNavigate();

  const handleArticleClick = () => {
    navigate(`/article/${article._id}`);
  };

  return (
    <figure className="blog-article">
      <div className="header" onClick={handleArticleClick}>
        <h3>{article.title}</h3>
      </div>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <img src={article.image} alt={article.title} />
      </a>
      <div className="footer">
        <p>{article.author.email}</p>
        {showFavoriteIcon && (
          <FontAwesomeIcon
            icon={isFavorite ? filledHeart : emptyHeart}
            className="favorite-icon"
            onClick={onToggleFavorite}
            title="Toggle Favorite"
          />
        )}
      </div>
    </figure>
  );
};
