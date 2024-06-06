import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, updateArticle } from '../../services/article.service';
import { Uploadfile } from '../../components';
import Swal from 'sweetalert2';
import './EditArticle.css';

export const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleById(id);
        setArticle(response.data);
        reset(response.data); // populate the form with existing article data
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id, reset]);

  const formSubmit = async (formData) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Vas a actualizar el artículo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const inputFile = document.getElementById('file-upload').files;

        if (inputFile.length !== 0) {
          const customFormData = new FormData();
          customFormData.append("title", formData.title);
          customFormData.append("text", formData.text);
          customFormData.append("image", inputFile[0]);

          try {
            await updateArticle(id, customFormData);
            Swal.fire('¡Actualizado!', 'El artículo ha sido actualizado.', 'success');
            navigate('/myArticles');
          } catch (error) {
            Swal.fire('Error', 'Hubo un problema al actualizar el artículo.', 'error');
          }
        } else {
          try {
            await updateArticle(id, formData);
            Swal.fire('¡Actualizado!', 'El artículo ha sido actualizado.', 'success');
            navigate('/myArticles');
          } catch (error) {
            Swal.fire('Error', 'Hubo un problema al actualizar el artículo.', 'error');
          }
        }
      }
    });
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="form-wrap">
      <h1>Editar Artículo</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="form-group">
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: true })}
          />
          <label htmlFor="title">Título</label>
        </div>
        <div className="form-group">
          <textarea
            id="text"
            name="text"
            {...register("text", { required: true })}
          />
          <label htmlFor="text">Texto</label>
        </div>
        <div className="form-group">
          <Uploadfile />
        </div>
        <div className="btn_container">
          <button
            type="submit"
            style={{ background: '#2f7a67' }}
          >
            Actualizar Artículo
          </button>
        </div>
      </form>
    </div>
  );
};
