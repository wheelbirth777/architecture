"use client";
import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Header() {
  function openSideMenu() {
    const sideMenu = document.querySelector(".side_menu4_overlay");
    const sideMenu2 = document.querySelector(".side_menu4_overlay2");
    const sideMenu4 = document.querySelector(".side_menu_style4");
    sideMenu2.classList.add("show");
    sideMenu.classList.add("show");
    sideMenu4.classList.add("show");
  }
  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: {
      nextEl: ".tc-header-style6 .swiper-button-next",
      prevEl: ".tc-header-style6 .swiper-button-prev",
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    loop: false,
  };
  return (
    <header className="tc-header-style6">
      <nav className="navbar tc-navbar-style6">
        <div className="container">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="nav-links">
              <a href="#0" className="me-4 side_menu_btn">
                <span onClick={openSideMenu}>
                  <i className="la la-grip-lines"></i>
                </span>
              </a>
              <a href="#" className="text-uppercase fsz-14">
                <span className="txt"> all products </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="logo text-center mb-4 mb-lg-0">
              {/* <img src="/home6_furniture/assets/images/logo.png" alt="" /> */}
              <h3>inspira</h3>
            </div>
          </div>
          <div className="col-lg-3 text-lg-end">
            <div className="nav-icons">
              <a href="#">
                <i className="fal fa-search"></i>
              </a>
              <a href="#">
                <i className="fal fa-user"></i>
              </a>
              <a href="#">
                <i className="fal fa-shopping-cart"></i>{" "}
                <span className="num">2</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-slider">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <div className="slide-card">
              <img
                src="/home6_furniture/assets/images/header1.webp"
                alt=""
                className="bg"
              />
              <div className="content">
                <div className="container">
                  <div className="info px-lg-4">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <div className="title">
                          <h2 className="justify-content-end"> Natural. </h2>
                          <h2> peaceful. </h2>
                          <h2 className="justify-content-end me-5">
                            {" "}
                            rustic.{" "}
                          </h2>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <small className="sm-txt">
                          Discover the our latest collection with rustic style,
                          <br /> premium imports furnitures
                        </small>
                      </div>
                    </div>
                    <a href="#" className="float-arrow">
                      <i className="fat fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card">
              <img
                src="/home6_furniture/assets/images/header2.webp"
                alt=""
                className="bg"
              />
              <div className="content">
                <div className="container">
                  <div className="info px-lg-4">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <div className="title">
                          <h2 className="justify-content-end"> modern. </h2>
                          <h2> timeless. </h2>
                          <h2 className="justify-content-end me-5"> urban. </h2>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <small className="sm-txt">
                          Discover the our latest collection with rustic style,
                          <br /> premium imports furnitures
                        </small>
                      </div>
                    </div>
                    <a href="#" className="float-arrow">
                      <i className="fat fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="floating-contact">
        <p>
          <a href="#"> +702 432 2332 </a>
        </p>
        <p>
          <a href="#"> support@inspira.com </a>
        </p>
      </div>
      <div className="arrows">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </header>
  );
}

export default Header;
