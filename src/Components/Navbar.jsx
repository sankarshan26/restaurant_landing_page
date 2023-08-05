import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "../CSS/Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="nav_container">
      <div className="logo">FrEaters</div>

      <ul className="nav_list">
        <li className="list-item">
          <a href="#Home">Home</a>
        </li>
        <li className="list-item">
          <a href="#About">About</a>
        </li>
        <li className="list-item">
          <a href="#Menu">Menu</a>
        </li>
        <li className="list-item">
          <a href="#Awards">Awards</a>
        </li>
        <li className="list-item">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="nav_login">
        <a href="#login" className="login_register nav_login-item">
          Login / Register
        </a>
        <div className="divider">&nbsp;</div>
        <a href="/" className="boook_table nav_login-item">
          Book Table
        </a>
      </div>

      <div className="navbar_smallscreen">
        <GiHamburgerMenu
          color="White"
          fontSize={20}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="smallscreen_nav_menu">
            <MdOutlineRestaurantMenu
              color="White"
              className="close_icon"
              fontSize={20}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="smallscreen_nav_list">
              <li className="smallscreen_list-item">
                <a href="#Home">Home</a>
              </li>
              <li className="smallscreen_list-item">
                <a href="#About">About</a>
              </li>
              <li className="smallscreen_list-item">
                <a href="#Menu">Menu</a>
              </li>
              <li className="smallscreen_list-item">
                <a href="#Awards">Awards</a>
              </li>
              <li className="smallscreen_list-item">
                <a href="#Contact">Contact</a>
              </li>
              <li className="smallscreen_list-item">
                <a href="#login" className="ss_btn_login_register">
                  Login / Register
                </a>
              </li>
              <li className="smallscreen_list-item">
                <a href="/" className="ss_btn_boook_table ">
                  Book Table
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
