"use client";
import React, { useEffect } from "react";

function Header() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (typeof gsap !== 'undefined') {
  //       clearInterval(interval);
  //       const tl = gsap.timeline();
  //       // tl.from('header', { y: 200 }, '-=1.5');
  //       tl.from(
  //         'header .container',
  //         { y: 40, opacity: 0, delay: 0.3 },
  //         '-=1.5'
  //       );
  //     }
  //   }, [100]);
  // }, []);
  return (
    <header className="tc-header-preview">
      <div className="slider-card">
        <div className="img">
          <img
            src="/home_preview/assets/img/header1.webp"
            alt=""
            className="img-cover"
          />
        </div>
        <div className="info">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-6">
                <div className="rotate-box" data-speed="1" data-lag="0.4">
                  <a
                    href="#"
                    className="rotate-circle fsz-35 rotate-text d-inline-block text-uppercase"
                  >
                    <svg className="textcircle" viewBox="0 0 500 500">
                      <defs>
                        <path
                          id="textcircle"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                        ></path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#textcircle" textLength="900">
                          • intro price • limited time offer
                        </textPath>
                      </text>
                    </svg>
                  </a>
                  <span className="num"> $ </span>
                </div>
              </div>
            </div>
            <div className="row ps-lg-5">
              <div className="col-lg-6">
                <h5 className="fsz-30 mt-30 fw-400">
                  Next.js Interior & Architecture Design <br /> DesignSpace
                </h5>
                <h1> inspira </h1>
              </div>
            </div>
            <ul className="features-txt ps-lg-5">
              <li> 8 Amazing Design Concepts </li>
              <li> 145 Components </li>
              <li> Figma design based </li>
              <li> High Performance </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="float-social-links">
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="float-icons">
        <ul>
          <li>
            <a href="#">
              <i className="fal fa-desktop"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fal fa-comments-alt"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fal fa-file-alt"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fal fa-comment-lines"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fal fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
