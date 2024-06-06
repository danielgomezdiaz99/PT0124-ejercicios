const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");
const { upload } = require("../../middleware/files.middleware");
const {
  create,
  getById,
  getAll,
  getByTitle,
  updateArticle,
  deleteArticle,
  getArticlesByUser,
} = require("../controllers/Article.controllers");

const ArticleRoutes = require("express").Router();

ArticleRoutes.post("/", upload.single("image"), create);
ArticleRoutes.get("/:id", getById);
ArticleRoutes.get("/", getAll);
ArticleRoutes.get("/bytitle/:title", getByTitle);
ArticleRoutes.patch("/:id",[isAuth], upload.single("image"), updateArticle);
ArticleRoutes.delete("/:id", deleteArticle);
ArticleRoutes.get('/user/:userId', getArticlesByUser);

module.exports = ArticleRoutes;
