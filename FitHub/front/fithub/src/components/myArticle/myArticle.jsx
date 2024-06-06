import React from 'react';
import "./myArticle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export const MyArticle = ({ author, title, url, urlToImage, onDelete, onEdit }) => {
  return (
    <figure className="myArticle">
      <div className="cabezera-article">
        <h3>{title}</h3>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={urlToImage} alt={title} />
      </a>
      <div className="pie-noticia">
        <p>{author}</p>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={onDelete}
          title="Delete Article"
        />
        <FontAwesomeIcon
          icon={faEdit}
          className="edit-icon"
          onClick={onEdit}
          title="Edit Article"
        />
      </div>
    </figure>
  );
};
