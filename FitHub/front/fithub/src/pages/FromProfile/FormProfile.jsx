import { useForm } from "react-hook-form";

import "./FormProfile.css";
import { FigureUser, Uploadfile } from "../../components";
import { UserAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { updateUser } from "../../services/user.service";
import { useUpdateError } from "../../hooks";

export const FormProfile = () => {
  const { user, setUser, logout } = UserAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  const defaultData = {
    name: user?.user,
  };

  const formSubmit = (formData) => {
    Swal.fire({
      title: "¿Estas seguro de que deseas modificar los datos?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(73, 193, 162)",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const inputFile = document.getElementById("file-upload").files;

        if (inputFile.length != 0) {
          const custonFormData = {
            ...formData,
            image: inputFile[0],
          };

          setSend(true);
          setRes(await updateUser(custonFormData));
          setSend(false);
        } else {
          const custonFormData = {
            ...formData,
          };
          setSend(true);
          setRes(await updateUser(custonFormData));
          setSend(false);
        }
      }
    });
  };


  useEffect(() => {
    console.log(res);
    useUpdateError(res, setRes, setUser, logout);
  }, [res]);

  return (
    <>
      <div className="containerProfile">
        <div className="containerDataNoChange">
          <FigureUser user={user} />
        </div>
        <div className="form-wrap formProfile">
          <h1>Cambio de datos del usuario</h1>
          <p>Introduce los datos de tu perfil</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
              <input
                className="input_user"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                defaultValue={defaultData?.name}
                {...register("name")}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                username
              </label>
            </div>
            <Uploadfile />
            <div className="btn_container">
              <button
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              >
                CAMBIAR DATOS DE USUARIO
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
