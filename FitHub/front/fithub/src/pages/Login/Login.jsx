import "./Login.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext";
import { loginUserService } from "../../services/user.service";
import { useLoginError } from "../../hooks";

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [loginOk, setLoginOk] = useState(false);
    const { login, setUser } = UserAuth();

    const formSubmit = async (formData) => {
        setSend(true);
        setRes(await loginUserService(formData));
        setSend(false);
    };

    useEffect(() => {
        useLoginError(res, setRes, login, setLoginOk);
    }, [res]);

    useEffect(() => {
        setUser(() => null);
        localStorage.removeItem('user');
    }, []);

    useEffect(() => {
        if (loginOk) {
            if (res.data.user.check === false) {
                window.location.href = '/verifyCode';
            } else {
                window.location.href = '/';
            }
        }
    }, [loginOk, res]);

    return (
        <>
            <div className="form-wrap">
                <h1>Acceso</h1>
                <p>Introducce tus datos para acceder 💌</p>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="email_container form-group">
                        <input
                            className="input_user"
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="false"
                            {...register("email", { required: true })}
                        />
                        <label htmlFor="custom-input" className="custom-placeholder">
                            Email
                        </label>

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
                                Contraseña
                            </label>
                        </div>
                    </div>

                    <div className="btn_container">
                        <button
                            className="btn"
                            type="submit"
                            disabled={send}
                            style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                        >
                            LOGIN
                        </button>
                    </div>
                    <p className="bottom-text">
                        <small>
                            ¿Has olvidado tu contraseña?
                            <Link to="/forgotpassword" className="anchorCustom">
                                Cambiar contraseña
                            </Link>
                        </small>
                    </p>
                </form>
            </div>
            <div className="footerForm">
                <p className="parrafoLogin">
                    ¿No estás registrado? <Link to="/register">Registrate aquí</Link>
                </p>
            </div>
        </>
    );
};
