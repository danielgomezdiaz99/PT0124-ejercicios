const Article = require("../models/Article.model");
const User = require("../models/User.model");
const { deleteImgCloudinary } = require("../../middleware/files.middleware");


const create = async (req, res, next) => {
  let catchImg = req.file?.path;

  try {
    await Article.syncIndexes();

    const newArticle = new Article({
      title: req.body.title,
      text: req.body.text,
      image: catchImg,
      author: req.body.author
    });

    try {
      const saveArticle = await newArticle.save();
      if (saveArticle) {
        return res.status(200).json(saveArticle);
      } else {
        return res.status(404).json("No se ha podido guardar el elemento en la DB ❌");
      }
    } catch (error) {
      console.error("Error al guardar el artículo:", error); // Logging the error
      return res.status(500).json("error general saved Article");
    }
  } catch (error) {
    console.error("Error en el try principal:", error); // Logging the error

    if (catchImg) {
      deleteImgCloudinary(catchImg);
    }

    return res.status(500).json({
      message: "Error en la creación del artículo",
      error: error.message
    });
  }
};

const getArticlesByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userArticles = await Article.find({ author: userId }).populate('author', 'username email'); 
    console.log(userArticles)
    if (userArticles.length > 0) {
      return res.status(200).json(userArticles);
    } else {
      return res.status(404).json("No se han encontrado artículos para este usuario.");
    }
  } catch (error) {
    return res.status(500).json({
      error: "Error al buscar los artículos del usuario",
      message: error.message,
    });
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const articleById = await Article.findById(id).populate('author', 'email');
    if (articleById) {
      return res.status(200).json(articleById);
    } else {
      return res.status(404).json("no se ha encontrado el artículo");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};


const getAll = async (req, res, next) => {
  try {
    const allArticles = await Article.find().populate('author', 'email'); // Popula solo el campo de email del autor
    if (allArticles.length > 0) {
      return res.status(200).json(allArticles);
    } else {
      return res.status(404).json("no se han encontrado artículos");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar - lanzado en el catch",
      message: error.message,
    });
  }
};

const getByTitle = async (req, res, next) => {
  try {
    const { title } = req.params;

    /// nos devuelve un array de elementos
    const getByTitle = await Article.find({ title });
    if (getByTitle.length > 0) {
      return res.status(200).json(getByTitle);
    } else {
      return res.status(404).json("no se ha encontrado");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por ttitle capturado en el catch",
      message: error.message,
    });
  }
};


const updateArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedArticle = await Article.findByIdAndUpdate(id, updateData, { new: true });

    if (updatedArticle) {
      return res.status(200).json(updatedArticle);
    } else {
      return res.status(404).json("No se ha encontrado el artículo");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Article.findByIdAndDelete(id);
    if (article) {
      const finByIdArticle = await Article.findById(id);

      try {
        const test = await Movie.updateMany(
          { characters: id },
          { $pull: { characters: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { articlesFav: id },
            { $pull: { articlesFav: id } }
          );

          return res.status(finByIdArticle ? 404 : 200).json({
            deleteTest: finByIdArticle ? false : true,
          });
        } catch (error) {
          return res.status(404).json({
            error: "error catch update User",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Article",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  create,
  getById,
  getAll,
  getByTitle,
  updateArticle,
  deleteArticle,
  getArticlesByUser
};
