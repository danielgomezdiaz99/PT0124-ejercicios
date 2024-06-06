
import { APIuser } from "./ServiceApiUser.config";
import { updateToken } from "../utils";

export const createArticle = async (formData) => {
  return APIuser.post("/article/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const getAllArticles = async () => {
  return APIuser.get('/article/', {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  });
};

export const getArticleByUser = async (userId) => {
  return APIuser.get(`/article/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const updateArticle = async (articleId, formData) => {
  return APIuser.patch(`/article/${articleId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const deleteArticleService = async (articleId) => {
  return APIuser.delete(`/article/${articleId}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const getFavorites = async () => {
  return APIuser.get('users/favorites', {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  });
};

export const addToFavorites = async (articleId) => {
  return APIuser.post('users/favorites/add', { articleId }, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  });
};

export const removeFromFavorites = async (articleId) => {
  return APIuser.post('users/favorites/remove', { articleId }, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  });
};

export const getArticleById = async (articleId) => {
  return APIuser.get(`/article/${articleId}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  });
};
