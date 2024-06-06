import "./CheckCode.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import {
    checkCodeConfirmationUser,
    resendCodeConfirmationUser,
} from "../../services/user.service";
import { UserAuth } from "../../context/authContext";
import { useAutoLogin, useCheckCodeError, useResendCodeError } from "../../hooks";

export const CheckCode = () => {
    const navigate = useNavigate();
    const { allUser, login, setUser } = UserAuth();
    const { register, handleSubmit } = useForm();

    const [res, setRes] = useState({});
    const [resResend, setResResend] = useState({});

    const [send, setSend] = useState(false);
    const [okCheck, setOkCheck] = useState(false);

    const [okDeleteUser, setOkDeleteUser] = useState(false);
    const [userNotFound, setUserNotFound] = useState(false);

    const formSubmit = async (formData) => {
      
        const userLocal = localStorage.getItem('user');

        if (userLocal == null) {
            const custFormData = {
                confirmationCode: parseInt(formData.confirmationCode),
                email: allUser.data.user.email,
            };
            setSend(true);
            setRes(await checkCodeConfirmationUser(custFormData))
            setSend(false);
        } else {
            const parseUser = JSON.parse(userLocal);
            const custFormData = {
                confirmationCode: parseInt(formData.confirmationCode),
                email: parseUser.email,
            };
            setSend(true);
            setRes(await checkCodeConfirmationUser(custFormData))
            setSend(false);
        };
    };

    // FUNCION RESEND CODE CONFIRMATION --> con boton con evento onClick (no tiene submit)
    const handleReSend = async () => {
        const userLocal = localStorage.getItem('user');
        if (userLocal != null) {
            const parseUser = JSON.parse(userLocal);
            const custFormData = {
                email: parseUser.email,
            };
            setSend(true);
            setResResend(await resendCodeConfirmationUser(custFormData));
            setSend(false);
        } else {
            const custFormData = {
                email: allUser?.data?.user?.email,
            };
            setSend(true);
            setResResend(await resendCodeConfirmationUser(custFormData));
            setSend(false);
        }
    };

    
    useEffect(() => {
        console.log("Res ✅", res);
        useCheckCodeError(
            res,
            setRes,
            setOkCheck,
            setOkDeleteUser,
            login,
            setUserNotFound
        );
    }, [res]);

    useEffect(() => {
        console.log("Resend 📫", resResend);
        useResendCodeError(
            resResend,
            setResResend,
            setUserNotFound
        );
    }, [resResend]);

    if(okCheck){
        if(!localStorage.getItem('user')){
            useAutoLogin(allUser, login);
        } else {
            return <Navigate to="/dashboard" />
        }
    }

    if(okDeleteUser){
        return <Navigate to="/register" />
    }

    if(userNotFound){
       
        return <Navigate to="/login" />
    }

    return (
    <>
        <div className="form-wrap">
            <h1>Verify your code 👌</h1>
            <p>Write the code sent to your email</p>
            <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
                <input
                className="input_user"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                {...register("confirmationCode", { required: false })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                Registration code
                </label>
            </div>

            <div className="btn_container">
                <button
                id="btnCheck"
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                >
                Verify Code
                </button>
            </div>
            <div className="btn_container">
                <button
                id="btnResend"
                className="btn"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                onClick={() => handleReSend()}
                >
                Resend Code
                </button>
            </div>

            <p className="bottom-text">
                <small>
                If the code is not correct ❌, your user will be deleted from the
                database and you will need to register again.{" "}
                </small>
            </p>
            </form>
        </div>
    </>
    )
}
