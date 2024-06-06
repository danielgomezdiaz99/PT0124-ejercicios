import React from 'react';
import "./FigureUser.css";

export const FigureUser = ({ user }) => {
  return (
    <figure className="figure-user">
      <img src={user.image} alt="user image" className="user-image" />
      <h4>Email: {user.email}</h4>
    </figure>
  );
}
