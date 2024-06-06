import React, { useEffect, useState } from 'react';
import { getFavorites, removeFromFavorites } from '../../services/article.service';
import "./FavoritesPage.css";
import { BlogArticle } from '../../components/BlogArticle/BlogArticle';
import { SearchBar } from '../../components';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();
        if (Array.isArray(response.data)) {
          setFavorites(response.data);
          setFilteredFavorites(response.data);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
        setError('Error fetching favorites');
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (articleId) => {
    try {
      await removeFromFavorites(articleId);
      const updatedFavorites = favorites.filter(article => article._id !== articleId);
      setFavorites(updatedFavorites);
      setFilteredFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error removing favorite:', error);
      setError('Error removing favorite');
    }
  };

  const handleSearch = (query) => {
    if (query.length >= 3) {
      const filtered = favorites.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFavorites(filtered);
    } else {
      setFilteredFavorites(favorites);
    }
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="favorites-page">
      <div className="header">
        <h2>Mis Artículos Favoritos</h2>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div id="container-gallery">
        {filteredFavorites.map((article) => (
          <BlogArticle
            key={article._id}
            article={article}
            isFavorite={true}
            onToggleFavorite={() => handleRemoveFavorite(article._id)}
          />
        ))}
      </div>
    </div>
  );
};
