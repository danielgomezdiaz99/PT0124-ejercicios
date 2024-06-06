import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { UserAuth } from "../../context/authContext";

export const NavBar = () => {
  const { user } = UserAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSubMenuOpen(false);  // Cierra el submenú también
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        closeMenus();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          &#9776;
        </button>
        <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={toggleMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item has-submenu">
            <div className="nav-links" onClick={toggleSubMenu}>
              Blog de usuarios
            </div>
            <ul className={`sub-menu ${isSubMenuOpen ? "active" : ""}`}>
              <li className="nav-sub-item">
                <NavLink to="/blog" className="nav-links" onClick={toggleMobileMenu}>
                  Ver blog
                </NavLink>
              </li>
              {user && (
                <>
                  <li className="nav-sub-item">
                    <NavLink to="/createArticle" className="nav-links" onClick={toggleMobileMenu}>
                      Crear artículo
                    </NavLink>
                  </li>
                  <li className="nav-sub-item">
                    <NavLink to="/favorites" className="nav-links" onClick={toggleMobileMenu}>
                      Artículos favoritos
                    </NavLink>
                  </li>
                  <li className="nav-sub-item">
                    <NavLink to="/myArticles" className="nav-links" onClick={toggleMobileMenu}>
                      Mis artículos
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
