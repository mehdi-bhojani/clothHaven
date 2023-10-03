import React, { useEffect } from 'react';

import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function MiniSlider() {
 /*  useEffect(() => {
    // Initialize Swiper when the component mounts
    new Swiper('.blog__swiper--activation', {
      slidesPerView: 5,
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []); // Empty dependency array to run this effect only once */

  return (
<div>
<Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={60}
    slidesPerView={4}
  
    
    speed={1000}
    navigation
   
   
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >


<SwiperSlide>
<div className="swiper-slide">
              <div className="blog__items">
                <div className="blog__thumbnail">
                  <a className="blog__thumbnail--link" href="blog-details.html">
                    <img className="blog__thumbnail--img" src="assets/img/blog/blog1.png" alt="blog-img" />
                  </a>
                </div>
                <div className="blog__content style2">
                  <span className="blog__content--meta">February 03, 2022</span>
                  <h3 className="blog__content--title style2">
                    <a href="blog-details.html">Fashion Trends In 2021 Styles, Colors, Accessories</a>
                  </h3>
                  <a className="blog__content--btn style2 primary__btn" href="blog-details.html">Read more</a>
                </div>
              </div>
            </div>

</SwiperSlide>

<SwiperSlide>
<div className="swiper-slide">
              <div className="blog__items two">
                <div className="blog__thumbnail">
                  <a className="blog__thumbnail--link" href="blog-details.html">
                    <img className="blog__thumbnail--img" src="assets/img/blog/blog2.png" alt="blog-img" />
                  </a>
                </div>
                <div className="blog__content style2">
                  <span className="blog__content--meta">February 03, 2022</span>
                  <h3 className="blog__content--title style2">
                    <a href="blog-details.html">Meet the Woman Behind Cool Ethical Label Reformation</a>
                  </h3>
                  <a className="blog__content--btn style2 primary__btn" href="blog-details.html">Read more</a>
                </div>
              </div>
            </div>

</SwiperSlide>

<SwiperSlide>
<div className="swiper-slide">
              <div className="blog__items three">
                <div className="blog__thumbnail">
                  <a className="blog__thumbnail--link" href="blog-details.html">
                    <img className="blog__thumbnail--img" src="assets/img/blog/blog3.png" alt="blog-img" />
                  </a>
                </div>
                <div className="blog__content style2">
                  <span className="blog__content--meta">February 03, 2022</span>
                  <h3 className="blog__content--title style2">
                    <a href="blog-details.html">Lauryn Hill Could Make Tulle Skirt and Cowboy</a>
                  </h3>
                  <a className="blog__content--btn style2 primary__btn" href="blog-details.html">Read more</a>
                </div>
              </div>
            </div>

</SwiperSlide>


<SwiperSlide>
<div className="swiper-slide">
              <div className="blog__items four">
                <div className="blog__thumbnail">
                  <a className="blog__thumbnail--link" href="blog-details.html">
                    <img className="blog__thumbnail--img" src="assets/img/blog/blog4.png" alt="blog-img" />
                  </a>
                </div>
                <div className="blog__content style2">
                  <span className="blog__content--meta">February 03, 2022</span>
                  <h3 className="blog__content--title style2">
                    <a href="blog-details.html">Fashion Trends In 2021 Styles, Colors, Accessories</a>
                  </h3>
                  <a className="blog__content--btn style2 primary__btn" href="blog-details.html">Read more</a>
                </div>
              </div>
            </div>

</SwiperSlide>

<SwiperSlide>
<div className="swiper-slide">
              <div className="blog__items five">
                <div className="blog__thumbnail">
                  <a className="blog__thumbnail--link" href="blog-details.html">
                    <img className="blog__thumbnail--img" src="assets/img/blog/blog2.png" alt="blog-img" />
                  </a>
                </div>
                <div className="blog__content style2">
                  <span className="blog__content--meta">February 03, 2022</span>
                  <h3 className="blog__content--title style2">
                    <a href="blog-details.html">Lauryn Hill Could Make Tulle Skirt and Cowboy</a>
                  </h3>
                  <a className="blog__content--btn style2 primary__btn" href="blog-details.html">Read more</a>
                </div>
              </div>
            </div>

</SwiperSlide>

</Swiper>

</div>
  
  );
}

export default MiniSlider;
