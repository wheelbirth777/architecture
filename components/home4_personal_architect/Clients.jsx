'use client';
import React from 'react';
import data from '@/data/hom4_personal_architect/clients';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
function Clients() {
  const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 50,
    speed: 1000,
    pagination: false,
    navigation: {
      nextEl: '.tc-clients-style4 .swiper-button-next',
      prevEl: '.tc-clients-style4 .swiper-button-prev',
    },
    keyboard: true,
    loop: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="tc-clients-style4">
      <div className="container">
        <div className="title">
          <div className="row">
            <div className="col-lg-9">
              <div className="title-side">
                <h2 className="sec-title mb-30 js-splittext-lines">
                  by clients
                </h2>
                <p className="fsz-18 color-666 js-splittext-lines">
                  Client&lsquo;s satisfied is my reputation
                </p>
              </div>
            </div>
            <div className="col-lg-3 mt-5 mt-lg-0 text-lg-end">
              <div className="arrows">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next ms-lg-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-content">
        <div className="container">
          <div className="clients-slider">
            <Swiper {...swiperOptions}>
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="client-card">
                    <div className="top-info">
                      <p> {item.title} </p>
                      <img
                        src="/home4_personal_architect/assets/img/icons/qaote.svg"
                        alt=""
                        className="icon"
                      />
                    </div>
                    <div className="text">{item.desc}</div>
                    <div className="user-info pt-30">
                      <div className="img">
                        <img
                          src="/home4_personal_architect/assets/img/clients/avatar.jpg"
                          alt=""
                          className="img-cover"
                        />
                      </div>
                      <div className="inf">
                        <p className="fsz-16 color-000 lh-1"> {item.name} </p>
                        <a href="#" className="fsz-12 color-666 hover-green1">
                          {item.subName}
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <img
        src="/home4_personal_architect/assets/img/globe.png"
        alt=""
        className="globe rotate-center"
      />
    </section>
  );
}

export default Clients;
