import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css'; // Import Swiper styles



function MiniSlider() {
  useEffect(() => {
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
  }, []); // Empty dependency array to run this effect only once

  return (
    <section className="blog__section section--padding color-scheme-2 pt-0">
      <div className="container-fluid">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle style2">From The Blog</h2>
        </div>
        <div className="blog__section--inner blog__swiper--activation swiper">
          <div className="swiper-wrapper">
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
            <div className="swiper-slide">
              <div className="blog__items">
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
            <div className="swiper-slide">
              <div className="blog__items">
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
            <div className="swiper-slide">
              <div className="blog__items">
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
            <div className="swiper-slide">
              <div className="blog__items">
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
          </div>
          <div className="swiper-button-next swiper__nav--btn" />
          <div className="swiper-button-prev swiper__nav--btn" />
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}

export default MiniSlider;
