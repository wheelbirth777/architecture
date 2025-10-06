"use client";
import React from "react";

function Navbar() {
  function openSideMenu() {
    const sideMenu = document.querySelector(".side_menu4_overlay");
    const sideMenu2 = document.querySelector(".side_menu4_overlay2");
    const sideMenu4 = document.querySelector(".side_menu_style4");
    sideMenu2.classList.add("show");
    sideMenu.classList.add("show");
    sideMenu4.classList.add("show");
  }
  return (
    <nav className="navbar tc-navbar-style5">
      <div className="container">
        <div className="col-lg-3 d-none d-lg-block">
          <div className="nav-links">
            <a href="#" className="me-5">
              <i className="la la-tty cir-icon"></i>
              <span className="txt"> 702-555-0101 </span>
            </a>
            <a href="#" className="">
              <span className="txt"> 3d tour </span>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="logo text-center mb-4 mb-lg-0">
            {/* <img src="/home5_residence/assets/images/logo.png" alt="" /> */}
          </div>
        </div>
        <div className="col-lg-3 text-lg-end">
          <div className="nav-btns">
            <a
              href="#"
              className="butn border rounded-pill border-brown1 hover-bg-brown1 text-uppercase color-brown1"
            >
              <span> schedule a visit </span>
            </a>
            <a href="#" className="icon ms-4 side_menu_btn">
              <span onClick={openSideMenu}>
                <i className="la la-grip-lines"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
