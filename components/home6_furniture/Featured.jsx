'use client';
import React from 'react';
import data from '@/data/home6_furniture/features';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
function Featured() {
  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: {
      el: '.products-slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.products-slider .swiper-button-next',
      prevEl: '.products-slider .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      787: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="tc-featured-style6">
      <div className="container">
        <div className="section-title mb-50 text-center">
          <h2 className="js-splittext-lines"> featured items </h2>
        </div>
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-tab1-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab1"
            >
              Best Seller
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-tab2-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab2"
            >
              New Arrival
            </button>
          </li>
        </ul>
        <div
          className="tab-content wow fadeInUp slow"
          data-wow-delay="0.2s"
          id="pills-tabContent"
        >
          <div className="tab-pane fade show active" id="pills-tab1">
            <div className="products-slider">
              <Swiper {...swiperOptions}>
                {data.new.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="product-card">
                      <div className="img">
                        <div className="tags">
                          <a href="#"> {item.offer} </a>
                        </div>
                        <img src={item.img} alt="" className="img-contain" />
                        <a
                          href="#"
                          className="butn border hover-bg-black text-uppercase bg-brown2 text-white"
                        >
                          <span> quick buy </span>
                        </a>
                      </div>
                      <div className="info text-center mt-30">
                        <h4 className="fsz-30 fw-400 mb-15">{item.title}</h4>
                        <p className="price d-block fsz-14 color-666">
                          {item.oldPrice && (
                            <span className="old-price color-orange1 text-decoration-line-through me-2">
                              {item.oldPrice}
                            </span>
                          )}
                          <span> {item.price} </span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-tab2">
            <div className="products-slider">
              <Swiper {...swiperOptions}>
                {data.best.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="product-card">
                      <div className="img">
                        <div className="tags">
                          <a href="#"> {item.offer} </a>
                        </div>
                        <img src={item.img} alt="" className="img-contain" />
                        <a
                          href="#"
                          className="butn border hover-bg-black text-uppercase bg-brown2 text-white"
                        >
                          <span> quick buy </span>
                        </a>
                      </div>
                      <div className="info text-center mt-30">
                        <h4 className="fsz-30 fw-400 mb-15">{item.title}</h4>
                        <p className="price d-block fsz-14 color-666">
                          {item.oldPrice && (
                            <span className="old-price color-orange1 text-decoration-line-through me-2">
                              {item.oldPrice}
                            </span>
                          )}
                          <span> {item.price} </span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div className="text-center wow fadeInUp slow" data-wow-delay="0.2s">
          <a
            href="#"
            className="butn border radius-4 border-brown2 hover-bg-brown2 text-capitalize color-brown2 mt-80"
          >
            <span> View All Products </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Featured;
