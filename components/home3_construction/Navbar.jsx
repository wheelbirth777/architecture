'use client';
import React from 'react';

function Navbar() {
  function openSideMenu() {
    const sideMenu = document.querySelector('.side_menu4_overlay');
    const sideMenu2 = document.querySelector('.side_menu4_overlay2');
    const sideMenu4 = document.querySelector('.side_menu_style4');
    sideMenu2.classList.add('show');
    sideMenu.classList.add('show');
    sideMenu4.classList.add('show');
  }
  return (
    <nav className="navbar navbar-expand-lg tc-navbar-style3">
      <div className="container-fluid">
        <div className="col-6 col-lg-4 p-0">
          <a className="navbar-brand" href="#">
            <img
              src="/home3_construction/assets/img/logo.png"
              alt=""
              className="logo"
            />
          </a>
        </div>
        <div className="col-6 col-lg-4 p-0">
          <div className="btn-select">
            <select name="" id="" className="form-select">
              <option value="">Private clients</option>
              <option value="">Private clients2</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="side-nav">
            <a href="#" className="b-link">
              <span>
                Free Consultation
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </a>
            <a href="#" className="ico-link">
              <i className="la la-search"></i>
            </a>
            <a href="#" className="ico-link">
              <i className="la la-globe"></i>
            </a>
            <a
              onClick={openSideMenu}
              href="#"
              className="ico-link side_menu_btn"
            >
              <i className="la la-grip-lines"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
