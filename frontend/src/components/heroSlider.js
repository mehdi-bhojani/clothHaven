import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css'; // Import Swiper styles

function HeroSlider() {
    useEffect(() => {
      // Initialize Swiper when the component mounts
      new Swiper('.swiper', {
        // Swiper configuration options here
        // For example, to enable navigation buttons:
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }, []); // Empty dependency array to run this effect only once

    return (
      <section className="hero__slider--section color-scheme-2">
        <div className="hero__slider--inner hero__slider--activation swiper">
          <div className="hero__slider--wrapper swiper-wrapper">
          <div className="swiper-slide ">
                  <div className="hero__slider--items home2__slider--bg">
                    <div className="container-fluid">
                      <div className="hero__slider--items__inner hero__slider--bg2__inner">
                        <div className="row row-cols-1">
                          <div className="col">
                            <div className="slider__content">
                              <p className="slider__content--desc desc1 text__secondary2 mb-15"> Big Offer 50% off</p>
                              <h2 className="slider__content--maintitle h1">New Collection <br />
                                Summer Sale</h2>
                              <p className="slider__content--desc desc2 d-sm-2-none mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
                              <a className="bg__secondary2 slider__btn primary__btn" href="shop.html">Show Collection
                                <svg className="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                  <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide ">
                  <div className="hero__slider--items home2__slider--bg two">
                    <div className="container-fluid">
                      <div className="hero__slider--items__inner hero__slider--bg2__inner">
                        <div className="slider__content">
                          <p className="slider__content--desc desc1 text__secondary2 mb-15"> Big Offer 50% off</p>
                          <h2 className="slider__content--maintitle h1">New Collection <br />
                            Summer Sale</h2>
                          <p className="slider__content--desc desc2 d-sm-2-none mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
                          <a className="bg__secondary2 slider__btn primary__btn" href="shop.html">Show Collection
                            <svg className="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                              <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide ">
                  <div className="hero__slider--items home2__slider--bg three">
                    <div className="container-fluid">
                      <div className="hero__slider--items__inner hero__slider--bg2__inner">
                        <div className="slider__content">
                          <p className="slider__content--desc desc1 text__secondary2 mb-15"> Big Offer 50% off</p>
                          <h2 className="slider__content--maintitle h1">New Collection <br />
                            Summer Sale</h2>
                          <p className="slider__content--desc desc2 d-sm-2-none mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
                          <a className="bg__secondary2 slider__btn primary__btn" href="shop.html">Show Collection
                            <svg className="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                              <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="swiper-button-next swiper__nav--btn" />
          <div className="swiper-button-prev swiper__nav--btn" />
        </div>
      </section>
    );
  }

  export default HeroSlider;
