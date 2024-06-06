import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useArticleError = (res, setArticleOk, setRes) => {

    if (res?.status == 200) {
        console.log("entro en el if del 200 🎉");
        const dataToString = JSON.stringify(res);
        localStorage.setItem("data", dataToString);
        setArticleOk(() => true);
        

        Swal.fire({
        icon: "success",
        title: "Articulo creado con exito 🎉",
        showConfirmButton: false,
        timer: 2500,
        });
        
        setRes({});
    }

    if (res?.response?.status === 409) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please , your email is incorrect !❎",
        showConfirmButton: false,
        timer: 1500,
        });
        setRes({});
    }

    if (
        res?.response?.data?.includes(
        "duplicate key error collection: userProyect.users index: name_1 dup key: { name"
        )
    ) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry choose another name ❎",
        showConfirmButton: false,
        timer: 1500,
        });
        setRes({});
    }

    

    if (res?.response?.status == 500) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Interval server error!❎ Please try again.",
        showConfirmButton: false,
        timer: 1500,
        });
        setRes({});
    }

    
    if (
        res?.response?.status == 404 &&
        res?.response?.data?.confirmationCode?.includes("error, resend code")
    ) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Register ok, error to resend code ❎",
        showConfirmButton: false,
        timer: 1500,
        });
        setRes({});
    }
};
