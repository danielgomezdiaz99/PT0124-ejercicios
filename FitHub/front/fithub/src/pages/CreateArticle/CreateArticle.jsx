import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Uploadfile } from "../../components";
import { useNavigate, Navigate } from "react-router-dom";
import { createArticle } from "../../services/article.service";
import { useArticleError } from "../../hooks";
import { UserAuth } from "../../context/authContext";
import "./CreateArticle.css";

export const CreateArticle = () => {
  const { user } = UserAuth();
  const userId = user._id;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okCreate, setOkCreate] = useState(false);

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById('file-upload').files;

    if (inputFile.length !== 0) {
      const customFormData = new FormData();
      customFormData.append("title", formData.title);
      customFormData.append("text", formData.text);
      customFormData.append("image", inputFile[0]);
      customFormData.append("author", userId);

      setSend(true);
      setRes(await createArticle(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await createArticle(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    useArticleError(res, setOkCreate, setRes);
    if (res?.status === 200) navigate("/"); // Redirect to articles list
  }, [res]);

  if (okCreate) {
    return (
      <div className="form-wrap">
        <h1>¡Artículo Creado!</h1>
        <p>Tu artículo ha sido creado con éxito. Puedes visualizarlo en el blog.</p>
        <Navigate to="/blog" />
      </div>
    );
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Crear Artículo</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-group">
          <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-group">
          <label htmlFor="text">Texto</label>
            <textarea
              id="text"
              name="text"
              {...register("text", { required: true })}
            />
          </div>
          <div className="form-group">
            <Uploadfile />
          </div>
          <div className="btn_container">
            <button
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#2f7a67" }}
            >
              {send ? "Cargando..." : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
