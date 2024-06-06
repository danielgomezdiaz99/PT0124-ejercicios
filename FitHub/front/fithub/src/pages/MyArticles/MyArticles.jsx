import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../../context/authContext";
import { getArticleByUser, deleteArticleService } from "../../services/article.service";
import Swal from 'sweetalert2';
import "./MyArticles.css";
import { MyArticle } from '../../components';
import { SearchBar } from '../../components';

export const MyArticles = () => {
  const { user } = UserAuth();
  const userId = user._id;
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticleByUser(userId);
        if (Array.isArray(response.data)) {
          setArticles(response.data);
          setFilteredArticles(response.data);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Error fetching articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [userId]);

  const handleDelete = async (articleId) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        Swal.fire({
          title: 'Eliminando...',
          text: 'Por favor espera',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });

        await deleteArticleService(articleId);
        const newArticles = articles.filter(article => article._id !== articleId);
        setArticles(newArticles);
        setFilteredArticles(newArticles);

        Swal.fire(
          '¡Borrado!',
          'Tu artículo ha sido borrado.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting article:', error);
        Swal.fire(
          'Error',
          'Hubo un problema al borrar el artículo.',
          'error'
        );
      }
    }
  };

  const handleEdit = (articleId) => {
    navigate(`/editArticle/${articleId}`);
  };

  const handleSearch = (query) => {
    if (query.length >= 3) {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="articles">
      <div className="cabecera-articles">
        <h2>Mis Noticias</h2>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div id="container-gallery">
        {filteredArticles.map((article) => (
          <MyArticle
            author={article.author.email}
            title={article.title}
            url={article.url}
            urlToImage={article.image}
            key={article._id}
            onDelete={() => handleDelete(article._id)}
            onEdit={() => handleEdit(article._id)}
          />
        ))}
      </div>
    </div>
  );
};
