import { useForm } from "react-hook-form";
import "./Register.css";
import { useEffect, useState } from "react";
import { Uploadfile } from "../../components";
import { Link,useNavigate, Navigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext";
import { registerUser } from "../../services/user.service";
import { useRegisterError } from "../../hooks";

export const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { allUser, setAllUser, bridgeData } = UserAuth();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [okRegister, setOkRegister] = useState(false);


    const formSubmit = async(formData) => {
        const inputFile = document.getElementById('file-upload').files;

        if (inputFile.length != 0) {
          
            const custonFormData = {
                ...formData,
                image: inputFile[0],
            };

            setSend(true);
            setRes(await registerUser(custonFormData));
            setSend(false);
        } else {
            const custonFormData = {
                ...formData,
            };

            setSend(true);
            setRes(await registerUser(custonFormData));
            setSend(false);
        }
    };


   useEffect(() => {
        console.log('soy res 🥶', res);
        useRegisterError(res, setOkRegister, setRes);
        if (res?.status == 200) bridgeData("ALLUSER"); 
    }, [res]); 

    useEffect(() => {
        console.log("soy allUser 😀", allUser);
    }, [allUser])
    


    if(okRegister){
        return <Navigate to='/verifyCode'/>
    }

    return (
    <>
        <div className="form-wrap">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
                <input
                className="input_user"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                {...register("name", { required: true })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                Nombre de usuario
                </label>
            </div>
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

                <div className="sexo">
                <input
                    type="radio"
                    name="sexo"
                    id="hombre"
                    value="hombre"
                    {...register("gender")}
                />
                <label htmlFor="hombre" className="label-radio hombre">
                    Hombre
                </label>
                <input
                    type="radio"
                    name="sexo"
                    id="mujer"
                    value="mujer"
                    {...register("gender")}
                />
                <label htmlFor="mujer" className="label-radio mujer">
                    Mujer
                </label>
                </div>
                <Uploadfile />
            </div>

            <div className="btn_container">
                <button
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#2f7a67" }}
                >
                { send ? "Cargando..." : "Register" }
                </button>
            </div>
            </form>
        </div>
        <div className="footerForm">
            <p className="parrafoLogin">
            ¿Ya tienes una cuenta? <Link to="/login">Logeate Aquí</Link>
            </p>
        </div>
    </>
    )
}
