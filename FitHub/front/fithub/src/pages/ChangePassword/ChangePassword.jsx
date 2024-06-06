import { useForm } from "react-hook-form";
import { UserAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { changePasswordUserToken } from "../../services/user.service";
import { useChangePasswordError } from "../../hooks";

export const ChangePassword = () => {
  const { setUser } = UserAuth();
  const { handleSubmit, register } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);


  const formSubmit = (formData) => {
    const { password, newPassword, confirmPassword } = formData;

    if (newPassword == confirmPassword) {
      Swal.fire({
        title: "¿Estás seguro de que quieres cambiar tu contraseña?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "YES",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setSend(true);
          setRes(await changePasswordUserToken({ password, newPassword }));
          setSend(false);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: " Las contraseñas deben coincidir❎.",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };


  useEffect(() => {
    console.log(res);
    useChangePasswordError(res, setRes, setUser);
  }, [res]);


  return (
    <>
      <div className="form-wrap">
        <h1>Cambio de contraseña ♻</h1>
        <p>Introduce tu anterior contraseña</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Contraseña Antigua
            </label>
          </div>
          <div className="newPassword_container form-group">
            <input
              className="input_user"
              type="password"
              id="newPassword"
              name="newPassword"
              autoComplete="false"
              {...register("newPassword", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Nueva contraseña
            </label>
          </div>
          <div className="confirmPassword_container form-group">
            <input
              className="input_user"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="false"
              {...register("confirmPassword", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Confirma la nueva contraseña
            </label>
          </div>
          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Cambio de Contraseña
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
