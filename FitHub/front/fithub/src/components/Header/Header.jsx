import { NavLink } from "react-router-dom";
import "./Header.css";
import { UserAuth } from "../../context/authContext";
import { NavBar } from "../Nav/NavBar";

export const Header = () => {
  const { user, logout } = UserAuth();

  return (
    <>
      <header>
        <div className="titleContainer">
          <NavLink to="/" className="logo-link">
            <img
              src="https://res.cloudinary.com/dqagf3leo/image/upload/v1715882268/Screenshot_3-removebg-preview_jzihbp.png"
              alt="logo-cabecera"
              className="logo-cabecera"
            />
          </NavLink>
        </div>
        <div className="user">
          {user == null && (
            <NavLink to="/login">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705523/login_ljn9fb.png"
                alt="Login"
                className="iconNav"
              />
            </NavLink>
          )}
          {user !== null && (
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685706203/9e3c325bca17c2147d249237c5a0906b_qhqifa.png"
              alt="Logout"
              className="iconNav iconLogout"
              onClick={() => logout()}
            />
          )}
          {user !== null ? (
            <NavLink to="/profile">
              <img
                className="profileCircle"
                src={user.image}
                alt={user.user}
              />
            </NavLink>
          ) : null}
        </div>
      </header>
      <NavBar />
    </>
  );
};
