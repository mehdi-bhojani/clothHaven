import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';


SwiperCore.use([Autoplay]);
// Import Swiper styles




function HeroSlider() {
   

    return (
      /*  <div className="swiper-button-next swiper__nav--btn" />
          <div className="swiper-button-prev swiper__nav--btn" /> */
     <div>
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true} // Enable loop
      autoplay={{
        "delay": 2000,
        "disableOnInteraction": false
      }}
      speed={1500}
      navigation
    >
      <SwiperSlide><div className="swiper-slide ">
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
                              <NavLink className="bg__secondary2 slider__btn primary__btn" to="shop">Show Collection
                                <svg className="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                  <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                                </svg>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></SwiperSlide>
      <SwiperSlide>  <div className="swiper-slide ">
                  <div className="hero__slider--items home2__slider--bg two">
                    <div className="container-fluid">
                      <div className="hero__slider--items__inner hero__slider--bg2__inner">
                        <div className="slider__content">
                          <p className="slider__content--desc desc1 text__secondary2 mb-15"> Big Offer 50% off</p>
                          <h2 className="slider__content--maintitle h1">New Collection <br />
                            Summer Sale</h2>
                          <p className="slider__content--desc desc2 d-sm-2-none mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
                          <NavLink className="bg__secondary2 slider__btn primary__btn" to="shop">Show Collection
                            <svg className="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                              <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                            </svg>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></SwiperSlide>
      <SwiperSlide> <div className="swiper-slide ">
                  <div className="hero__slider--items home2__slider--bg three">
                    <div className="container-fluid">
                      <div className="hero__slider--items__inner hero__slider--bg2__inner">
                        <div className="slider__content">
                          <p className="slider__content--desc desc1 text__secondary2 mb-15"> Big Offer 50% off</p>
                          <h2 className="slider__content--maintitle h1">New Collection <br />
                            Summer Sale</h2>
                          <p className="slider__content--desc desc2 d-sm-2-none mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
                          <NavLink className="bg__secondary2 slider__btn primary__btn" to="shop">Show Collection
                            <svg className="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                              <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                            </svg>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></SwiperSlide>
     
      

          



    </Swiper>
   
     </div>
    );
  }

  export default HeroSlider;
