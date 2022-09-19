import React from "react";
import { MenuList } from "./Menuitems";
import "../Navbar/Navbar.css";
import {useAuth0} from "@auth0/auth0-react"

const MenuElements = () => {
  const { logout, isAuthenticated, user } = useAuth0()
  return (
    isAuthenticated &&
    <>
      <div className="navbar-menu">
        <div className="text-center">
          <img src={user.picture} alt={user.family_name} className="user-picture" />
        </div>
        <div className="d-flex align-items-center mx-5">
          {MenuList.map((menuItem, idx) => {
            return (
              <ul key={idx}>
                <a href={menuItem.url}>
                  <li className={`${menuItem.cName} mx-3`}>{menuItem.title}</li>
                </a>
              </ul>
            );
          })}
          <button className="navbar-link-btn" onClick={() => logout()}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default MenuElements;
