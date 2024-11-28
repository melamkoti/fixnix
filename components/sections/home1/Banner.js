"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      {/*Main Slider Start*/}
      <section className="main-slider clearfix">
        <Swiper
          {...swiperOptions}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-1.jpg)",
                  }}
                ></div>
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <h2 className="main-slider__title">
                          One Family, Many Missions, Infinite Impact
                        </h2>
                        <p className="main-slider__text">
                          CaterWealth - One family that unites Diverse missions
                          - Healthcare, Social service, and Journalism - to
                          create endless impact, enriching communities and
                          fostering growth.
                        </p>
                        <div className="main-slider__btn-box">
                          <Link
                            href="about"
                            className="thm-btn main-slider__btn"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-2.jpg)",
                  }}
                ></div>
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <h2 className="main-slider__title">
                          "Your health, our mission - innovating for a better
                          future."
                        </h2>
                        <p className="main-slider__text">
                          Your health is our mission at CaterHealth, where
                          innovation drives better futures. We're committed to
                          advancing medical care and improving lives through
                          groundbreaking solutions.
                        </p>
                        <div className="main-slider__btn-box">
                          <Link
                            href="about"
                            className="thm-btn main-slider__btn"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-3.jpg)",
                  }}
                ></div>
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <h2 className="main-slider__title">
                          Together, we rise - empowering lives, enriching
                          futures.
                        </h2>
                        <p className="main-slider__text">
                          Together, we lift each other up, transforming lives
                          and fostering brighter futures. Through unity and
                          support, we create lasting change for all.
                        </p>
                        <div className="main-slider__btn-box">
                          <Link
                            href="about"
                            className="thm-btn main-slider__btn"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* If we need navigation buttons */}
          <div className="main-slider__nav">
            <div
              className="swiper-button-prev h1p"
              id="main-slider__swiper-button-next"
            >
              <i className="icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next h1n"
              id="main-slider__swiper-button-prev"
            >
              <i className="icon-right-arrow"></i>
            </div>
          </div>
        </Swiper>
      </section>
      {/*Main Slider End*/}
    </>
  );
}
