import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { React, props } from "react";

SwiperCore.use([Autoplay]);
// Import Swiper styles

function CategoryProductSlider(props) {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true} // Enable loop
        speed={1500}
        navigation
      >
        {props.images.map((item, index) => {
          return (
            <SwiperSlide>
              <div class="product__items ">
                <div class="product__items--thumbnail">
                  <a class="product__items--link" href="product-details.html">
                    <img
                      class="product__items--img product__primary--img"
                      src="assets/img/product/product1.png"
                      alt="product-img"
                    />
                    <img
                      class="product__items--img product__secondary--img"
                      src="assets/img/product/product2.png"
                      alt="product-img"
                    />
                  </a>
                  <div class="product__badge">
                    <span class="product__badge--items sale">Sale</span>
                  </div>
                </div>
                <div class="product__items--content">
                  <span class="product__items--content__subtitle">
                    Jacket, Women
                  </span>
                  <h3 class="product__items--content__title h4">
                    <a href="product-details.html">Oversize Cotton Dress</a>
                  </h3>
                  <div class="product__items--price">
                    <span class="current__price">$110</span>
                    <span class="price__divided"></span>
                    <span class="old__price">$78</span>
                  </div>
                  <ul class="rating product__rating d-flex">
                    <li class="rating__list">
                      <span class="rating__list--icon">
                        <svg
                          class="rating__list--icon__svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.105"
                          height="14.732"
                          viewBox="0 0 10.105 9.732"
                        >
                          <path
                            data-name="star - Copy"
                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                            transform="translate(0 -0.018)"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </li>
                    <li class="rating__list">
                      <span class="rating__list--icon">
                        <svg
                          class="rating__list--icon__svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.105"
                          height="14.732"
                          viewBox="0 0 10.105 9.732"
                        >
                          <path
                            data-name="star - Copy"
                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                            transform="translate(0 -0.018)"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </li>
                    <li class="rating__list">
                      <span class="rating__list--icon">
                        <svg
                          class="rating__list--icon__svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.105"
                          height="14.732"
                          viewBox="0 0 10.105 9.732"
                        >
                          <path
                            data-name="star - Copy"
                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                            transform="translate(0 -0.018)"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </li>
                    <li class="rating__list">
                      <span class="rating__list--icon">
                        <svg
                          class="rating__list--icon__svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.105"
                          height="14.732"
                          viewBox="0 0 10.105 9.732"
                        >
                          <path
                            data-name="star - Copy"
                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                            transform="translate(0 -0.018)"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </li>
                    <li class="rating__list">
                      <span class="rating__list--icon">
                        <svg
                          class="rating__list--icon__svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.105"
                          height="14.732"
                          viewBox="0 0 10.105 9.732"
                        >
                          <path
                            data-name="star - Copy"
                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                            transform="translate(0 -0.018)"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </li>
                  </ul>
                  <ul class="product__items--action d-flex">
                    <li class="product__items--action__list">
                      <a
                        class="product__items--action__btn add__to--cart"
                        href="cart.html"
                      >
                        <img src="\assets\img\svg\cart.svg" />
                        <span class="add__to--cart__text"> + Add to cart</span>
                      </a>
                    </li>
                    <li class="product__items--action__list">
                      <a
                        class="product__items--action__btn"
                        href="wishlist.html"
                      >
                        
                        <span class="visually-hidden">Wishlist</span>
                      </a>
                    </li>
                    <li class="product__items--action__list">
                      <a
                        class="product__items--action__btn"
                        data-open="modal1"
                        href="javascript:void(0)"
                      >
                        <svg
                          class="product__items--action__btn--svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25.51"
                          height="23.443"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                          />
                          <circle
                            cx="256"
                            cy="256"
                            r="80"
                            fill="none"
                            stroke="currentColor"
                            stroke-miterlimit="10"
                            stroke-width="32"
                          />
                        </svg>
                        <span class="visually-hidden">Quick View</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CategoryProductSlider;
