"use client";
import React from "react";
import data from "@/data/main-page/according";
import { Navigation, Mousewheel, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function DarkSection2() {
  const swiperOptions = {
    modules: [Autoplay, Mousewheel, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
      nextEl: ".testimonials-content .swiper-button-next",
      prevEl: ".testimonials-content .swiper-button-prev",
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
  };
  return (
    <section className="tc-dark-sections-st2">
      <div className="tc-testimonials">
        {/* <div className="container">
          <div className="rotate-box" data-speed="1" data-lag="0.4">
            <a
              href="#"
              className="rotate-circle rotate-text d-inline-block text-uppercase"
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
                    - trusted by clients - testimonials
                  </textPath>
                </text>
              </svg>
            </a>
            <span className="num">
              <i className="fas fa-quote-right"></i>
            </span>
          </div>
          <div
            className="testimonials-content wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="testimonials-slider">
                  <Swiper {...swiperOptions}>
                    <SwiperSlide>
                      <div className="slide-card">
                        <h3 className="main-text">
                          “This is a very flexible theme in terms of usability.
                          Fast and professional support services. Thank you
                          UiCamp for making such a wonderful theme.”
                        </h3>
                        <div className="btm-inf mt-70">
                          <h6 className="fsz-18 fw-bold mb-10"> wesolveict </h6>
                          <p>
                            <a
                              href="#"
                              className="text-decoration-underline color-green1"
                            >
                              Envato Market Buyer
                            </a>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>  
        </div> */}
      </div>

      {/* <div className="tc-faq">
        <div className="container">
          <div className="title text-center js-splittext-lines">
            <h2 className="fsz-45 mb-70 fw-500">
              {' '}
              Frequently Asked Questions{' '}
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="accordion wow zoomIn slow"
                data-wow-delay="0.2s"
                id="accordionExample"
              >
                {data.map((item, i) => (
                  <div key={i} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse5"
                      >
                        <span className="num"> {i + 1}. </span> {item.q}
                      </button>
                    </h2>
                    <div
                      id="collapse5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="text">{item.a}</div>
                      </div>
                    </div>
                  </div>
                ))}

                <img
                  src="/home_preview/assets/img/faq_bg.png"
                  alt=""
                  className="bg"
                />
              </div>
              <p className="fsz-14 mt-20 text-center">
                Have any other questions? Please leave your comment on{' '}
                <a href="#" className="text-primary">
                  our product page
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="tc-purchase">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content">
                <h2 className="js-splittext-lines">
                  Make a lasting impression with beautifully crafted designs
                </h2>
                <p
                  className="fsz-16 mt-50 wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  <span className="color-ccc">© 2025 JATLink Labs.</span> All
                  Rights Reserved. <br />
                  Built with Next.js and crafted for your success{" "}
                  <span className="color-ccc">by JATLink Labs.</span>
                </p>
                <a
                  href="#"
                  className="butn hover-bg-black text-capitalize bg-orange1 rounded-pill text-white mt-80 wow fadeInUp slow"
                  data-wow-delay="0.3s"
                >
                  <span>
                    <i className="fas fa-leaf me-1"></i> Purchase Now
                  </span>
                </a>
                <p
                  className="fsz-16 mt-50 color-ccc wow fadeInUp slow"
                  data-wow-delay="0.4s"
                >
                  © 2025 JATLink Labs. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-img wow fadeInUp slow" data-wow-delay="0.6s">
          <div className="container">
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
      </div>
    </section>
  );
}

export default DarkSection2;
