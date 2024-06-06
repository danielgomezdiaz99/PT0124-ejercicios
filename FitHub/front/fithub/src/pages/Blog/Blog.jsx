import React, { useEffect, useState } from 'react';
import { getAllArticles, addToFavorites, removeFromFavorites, getFavorites } from '../../services/article.service';
import "./Blog.css";
import { BlogArticle } from '../../components/BlogArticle/BlogArticle';
import { UserAuth } from '../../context/authContext'; // Importar el contexto de autenticación

export const Blog = () => {
  const { user } = UserAuth(); // Obtener el usuario del contexto de autenticación
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getAllArticles();
        if (Array.isArray(response.data)) {
          setArticles(response.data);
        } else {
          console.error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    const fetchFavorites = async () => {
      if (user) { // Solo obtener favoritos si el usuario está logueado
        try {
          const response = await getFavorites();
          if (Array.isArray(response.data)) {
            setFavorites(response.data.map(article => article._id));
          } else {
            console.error('Unexpected response format');
          }
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      }
    };

    fetchArticles();
    fetchFavorites();
  }, [user]);

  const handleToggleFavorite = async (articleId) => {
    if (!user) return; // Si el usuario no está logueado, no hacer nada

    const isFavorite = favorites.includes(articleId);
    if (isFavorite) {
      await removeFromFavorites(articleId);
      setFavorites(favorites.filter(id => id !== articleId));
    } else {
      await addToFavorites(articleId);
      setFavorites([...favorites, articleId]);
    }
  };

  return (
    <div className="blog-page">
      <div className="header">
        <h2>Todos los Artículos</h2>
      </div>
      <div id="container-gallery">
        {articles.map((article) => (
          <BlogArticle
            key={article._id}
            article={article}
            isFavorite={favorites.includes(article._id)}
            onToggleFavorite={() => handleToggleFavorite(article._id)}
            showFavoriteIcon={!!user} // Pasar si el usuario está logueado o no
          />
        ))}
      </div>
    </div>
  );
};
