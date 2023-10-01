import React from "react";
import HeroSlider from "../components/heroSlider";
import MiniSlider from "../components/miniSlider";

export default function Home(){
    return (

        <main className="main__content_wrapper">
          {/* Start slider section */}
          <HeroSlider />
          {/* End slider section */}
          {/* Start banner section */}
          <section className="banner__section banner__style2 section--padding color-scheme-2">
            <div className="section__heading text-center mb-35">
              <h2 className="section__heading--maintitle style2">Shop by Categories</h2>
            </div>
            <div className="container-fluid">
              <div className="row mb--n28">
                <div className="col-lg-4 col-md-order mb-28">
                  <div className="banner__items position__relative">
                    <a className="banner__items--thumbnail " href="shop.html"><img className="banner__items--thumbnail__img" src="assets/img/banner/banner7.png" alt="banner-img" />
                      <div className="banner__items--content style2">
                        <h3 className="banner__items--content__title style2">NEW <br />
                          ACCESSORIES</h3>
                        <span className="banner__items--content__link style2">SHOP NOW</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="banner__style2--top__sidebar d-flex">
                    <div className="banner__items position__relative mr-30 mb-28">
                      <a className="banner__items--thumbnail" href="shop.html"><img className="banner__items--thumbnail__img banner__img--max__height" src="assets/img/banner/banner8.png" alt="banner-img" />
                        <div className="banner__items--content style2">
                          <h3 className="banner__items--content__title style2">NEW <br />
                            ACCESSORIES</h3>
                          <span className="banner__items--content__link style2">SHOP NOW</span>
                        </div>
                      </a>
                    </div>
                    <div className="banner__items position__relative mb-28">
                      <a className="banner__items--thumbnail" href="shop.html"><img className="banner__items--thumbnail__img" src="assets/img/banner/banner9.png" alt="banner-img" />
                        <div className="banner__items--content style2">
                          <h3 className="banner__items--content__title style2">TRENDING <br />
                            NOW</h3>
                          <span className="banner__items--content__link style2">SHOP NOW</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="row row-cols-sm-2 row-cols-1">
                    <div className="col mb-28">
                      <div className="banner__items position__relative">
                        <a className="banner__items--thumbnail" href="shop.html"><img className="banner__items--thumbnail__img banner__img--max__height" src="assets/img/banner/banner10.png" alt="banner-img" />
                          <div className="banner__items--content style2">
                            <h3 className="banner__items--content__title style2">TOP <br />
                              SELLER</h3>
                            <span className="banner__items--content__link style2">SHOP NOW</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col mb-28">
                      <div className="banner__items position__relative">
                        <a className="banner__items--thumbnail" href="shop.html"><img className="banner__items--thumbnail__img banner__img--max__height" src="assets/img/banner/banner11.png" alt="banner-img" />
                          <div className="banner__items--content style2 right">
                            <h3 className="banner__items--content__title style2">TOP <br />
                              DECORATION</h3>
                            <span className="banner__items--content__link style2">SHOP NOW</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End banner section */}
          {/* Start product section */}
          <section className="product__section section--padding color-scheme-2 pt-0">
            <div className="container-fluid">
              <div className="section__heading text-center mb-35">
                <h2 className="section__heading--maintitle style2">Summer Collection</h2>
              </div>
              <div className="product__section--inner">
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product1.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product2.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">Oversize Cotton Dress</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$110</span>
                          <span className="price__divided" />
                          <span className="old__price">$78</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product3.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product4.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">Boxy Denim Jacket</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$78</span>
                          <span className="price__divided" />
                          <span className="old__price">$105</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product5.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product6.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">Quilted Shoulder Bag</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$112</span>
                          <span className="price__divided" />
                          <span className="old__price">$120</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product7.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product8.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">High Ankle Jeans</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$98</span>
                          <span className="price__divided" />
                          <span className="old__price">$105</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product9.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product10.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">Square Shoulder Bag</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$80</span>
                          <span className="price__divided" />
                          <span className="old__price">$120</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product11.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product12.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">Light Denim Jacket</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$86</span>
                          <span className="price__divided" />
                          <span className="old__price">$98</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product13.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product14.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">Wool-blend Jacket</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$67</span>
                          <span className="price__divided" />
                          <span className="old__price">$92</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product2.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product1.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">OSmock Mini Dresss</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$65</span>
                          <span className="price__divided" />
                          <span className="old__price">$70</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product3.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product4.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">Western denim shirt</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$90</span>
                          <span className="price__divided" />
                          <span className="old__price">$118</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="assets/img/product/product5.png" alt="product-img" />
                          <img className="product__items--img product__secondary--img" src="assets/img/product/product6.png" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Sale</span>
                        </div>
                        <a className="product__add-to__cart--btn__style2 " href="cart.html">
                          <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                            <g transform="translate(0 0)">
                              <g>
                                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text"> + Add to cart</span>
                        </a>
                        <ul className="product__items--action__style2">
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" href="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="23.51" height="21.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__items--action__style2--list">
                            <a className="product__items--action__style2--btn" data-open="modal1" href="">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                              <span className="visually-hidden">Quick View</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">Jacket, Women</span>
                        <h3 className="product__items--content__title h4"><a href="product-details.html">Aware organic cotton</a></h3>
                        <div className="product__items--price">
                          <span className="current__price">$55</span>
                          <span className="price__divided" />
                          <span className="old__price">$66</span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End product section */}
          {/* Start banner section */}
          <section className="banner__section banner__discount section--padding color-scheme-2 pt-0">
            <div className="container-fluid">
              <div className="banner__discount--inner position__relative">
                <div className="row row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <div className="banner__items banner__discount--items position__relative">
                      <a className="banner__items--thumbnail " href="shop.html"><img className="banner__items--thumbnail__img" src="assets/img/banner/banner12.png" alt="banner-img" /></a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="banner__items banner__discount--items position__relative">
                      <a className="banner__items--thumbnail " href="shop.html"><img className="banner__items--thumbnail__img" src="assets/img/banner/banner13.png" alt="banner-img" /></a>
                    </div>
                  </div>
                </div>
                <div className="banner__discount--content text-center">
                  <span className="banner__discount--content__subtitle">Summer Collection 2022</span>
                  <h2 className="banner__discount--content__title h3">Get 35% Diseount For <br />
                    Couple Special</h2>
                  <a className="banner__discount--content__link" href="shop.html">SHOP NOW</a>
                </div>
              </div>
            </div>
          </section>
          {/* End banner section */}
          {/* Start grid product section */}
          <section className="product__section section--padding color-scheme-2 pt-0">
            <div className="container-fluid">
              <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n30">
                <div className="col mb-30">
                  <div className="banner__items position__relative">
                    <a className="banner__items--thumbnail width-100 " href="shop.html"><img className="banner__items--thumbnail__img width-100" src="assets/img/banner/banner14.png" alt="banner-img" />
                      <div className="banner__items--content__style3">
                        <span className="banner__items--content__style3--subtitle text-white">Wmen's Collection</span>
                        <h2 className="banner__items--content__style3--title text-white h3"> Min.40-70% Off</h2>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-30">
                  <div className="product__grid--wrapper">
                    <div className="product__grid--heading mb-30">
                      <h2 className="product__grid--heading__maintitle position__relative">Featured</h2>
                    </div>
                    <div className="product__grid--inner">
                      <div className="product__items product__items--grid d-flex align-items-center">
                        <div className="product__items--grid__thumbnail position__relative">
                          <a className="product__items--link" href="product-details.html">
                            <img className="product__items--img product__primary--img" src="assets/img/product/small-product1.png" alt="product-img" />
                            <img className="product__items--img product__secondary--img" src="assets/img/product/small-product2.png" alt="product-img" />
                          </a>
                        </div>
                        <div className="product__items--grid__content">
                          <h3 className="product__items--content__title h4"><a href="product-details.html">Women Fish Cut Cloth</a></h3>
                          <div className="product__items--price">
                            <span className="current__price">$110</span>
                            <span className="price__divided" />
                            <span className="old__price">$78</span>
                          </div>
                          <ul className="rating product__rating d-flex">
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__items product__items--grid d-flex align-items-center">
                        <div className="product__items--grid__thumbnail position__relative">
                          <a className="product__items--link" href="product-details.html">
                            <img className="product__items--img product__primary--img" src="assets/img/product/small-product3.png" alt="product-img" />
                            <img className="product__items--img product__secondary--img" src="assets/img/product/small-product4.png" alt="product-img" />
                          </a>
                        </div>
                        <div className="product__items--grid__content">
                          <h3 className="product__items--content__title h4"><a href="product-details.html">Gorgeous Granite Clock</a></h3>
                          <div className="product__items--price">
                            <span className="current__price">$140</span>
                            <span className="price__divided" />
                            <span className="old__price">$115</span>
                          </div>
                          <ul className="rating product__rating d-flex">
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__items product__items--grid d-flex align-items-center">
                        <div className="product__items--grid__thumbnail position__relative">
                          <a className="product__items--link" href="product-details.html">
                            <img className="product__items--img product__primary--img" src="assets/img/product/small-product5.png" alt="product-img" />
                            <img className="product__items--img product__secondary--img" src="assets/img/product/small-product6.png" alt="product-img" />
                          </a>
                        </div>
                        <div className="product__items--grid__content">
                          <h3 className="product__items--content__title h4"><a href="product-details.html">Durable Steel Knife</a></h3>
                          <div className="product__items--price">
                            <span className="current__price">$160</span>
                            <span className="price__divided" />
                            <span className="old__price">$118</span>
                          </div>
                          <ul className="rating product__rating d-flex">
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-30">
                  <div className="banner__items position__relative">
                    <a className="banner__items--thumbnail md-width-100" href="shop.html"><img className="banner__items--thumbnail__img md-width-100" src="assets/img/banner/banner15.png" alt="banner-img" />
                      <div className="banner__items--content__style3">
                        <span className="banner__items--content__style3--subtitle text-white">Wmen's Collection</span>
                        <h2 className="banner__items--content__style3--title text-white h3"> Min.40-70% Off</h2>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-30">
                  <div className="product__grid--wrapper">
                    <div className="product__grid--heading mb-30">
                      <h2 className="product__grid--heading__maintitle position__relative">Bestsellers</h2>
                    </div>
                    <div className="product__grid--inner">
                      <div className="product__items product__items--grid d-flex align-items-center">
                        <div className="product__items--grid__thumbnail position__relative">
                          <a className="product__items--link" href="product-details.html">
                            <img className="product__items--img product__primary--img" src="assets/img/product/small-product2.png" alt="product-img" />
                            <img className="product__items--img product__secondary--img" src="assets/img/product/small-product1.png" alt="product-img" />
                          </a>
                        </div>
                        <div className="product__items--grid__content">
                          <h3 className="product__items--content__title h4"><a href="product-details.html">Women White T-Shirt</a></h3>
                          <div className="product__items--price">
                            <span className="current__price">$110</span>
                            <span className="price__divided" />
                            <span className="old__price">$78</span>
                          </div>
                          <ul className="rating product__rating d-flex">
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__items product__items--grid d-flex align-items-center">
                        <div className="product__items--grid__thumbnail position__relative">
                          <a className="product__items--link" href="product-details.html">
                            <img className="product__items--img product__primary--img" src="assets/img/product/small-product4.png" alt="product-img" />
                            <img className="product__items--img product__secondary--img" src="assets/img/product/small-product3.png" alt="product-img" />
                          </a>
                        </div>
                        <div className="product__items--grid__content">
                          <h3 className="product__items--content__title h4"><a href="product-details.html">Women Modern Bags</a></h3>
                          <div className="product__items--price">
                            <span className="current__price">$140</span>
                            <span className="price__divided" />
                            <span className="old__price">$115</span>
                          </div>
                          <ul className="rating product__rating d-flex">
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__items product__items--grid d-flex align-items-center">
                        <div className="product__items--grid__thumbnail position__relative">
                          <a className="product__items--link" href="product-details.html">
                            <img className="product__items--img product__primary--img" src="assets/img/product/small-product6.png" alt="product-img" />
                            <img className="product__items--img product__secondary--img" src="assets/img/product/small-product5.png" alt="product-img" />
                          </a>
                        </div>
                        <div className="product__items--grid__content">
                          <h3 className="product__items--content__title h4"><a href="product-details.html">Smart Blazar for Men</a></h3>
                          <div className="product__items--price">
                            <span className="current__price">$160</span>
                            <span className="price__divided" />
                            <span className="old__price">$118</span>
                          </div>
                          <ul className="rating product__rating d-flex">
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End grid product section */}
          {/* Start brand logo section */}
          <div className="brand__logo--section bg__secondary section--padding color-scheme-2">
            <div className="container-fluid">
              <div className="row row-cols-1">
                <div className="col">
                  <div className="brand__logo--section__inner d-flex justify-content-center align-items-center">
                    <div className="brand__logo--items">
                      <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo1.png" alt="brand logo img" />
                    </div>
                    <div className="brand__logo--items">
                      <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo2.png" alt="brand logo img" />
                    </div>
                    <div className="brand__logo--items">
                      <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo3.png" alt="brand logo img" />
                    </div>
                    <div className="brand__logo--items">
                      <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo4.png" alt="brand logo img" />
                    </div>
                    <div className="brand__logo--items">
                      <img className="brand__logo--items__thumbnail--img display-block" src="assets/img/logo/brand-logo5.png" alt="brand logo img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End brand logo section */}
          {/* Start shop cards section */}
          <section className="shop__card--section section--padding color-scheme-2">
            <div className="container-fluid">
              <div className="shop__card--section__inner">
                <div className="row row-cols-md-2 row-cols-1 align-items-center">
                  <div className="col col-sm-order">
                    <div className="shop__card--content">
                      <h3 className="shop__card--content__subtitle">GIFT CARDS</h3>
                      <h2 className="shop__card--content__maintitle mb-12">Support your <br />
                        neighborhood</h2>
                      <p className="shop__card--content__desc">We believe that local businesses are an integral <br /> part of a neighborhood's character. Help keep <br /> local by buying a gift card!</p>
                      <a className="shop__card--content__btn bg__secondary2 primary__btn" href="shop.html">Shop gift cards</a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="shop__card--banner position__relative d-flex">
                      <div className="shop__card--banner__thumbnail one">
                        <a className="display-block" href="shop.html"><img className="shop__card--banner__thumbnail--img display-block" src="assets/img/banner/banner16.png" alt="shop-card-banner" /></a>
                      </div>
                      <div className="shop__card--banner__thumbnail two">
                        <a className="display-block" href="shop.html"><img className="shop__card--banner__thumbnail--img display-block" src="assets/img/banner/banner17.png" alt="shop-card-banner" /></a>
                      </div>
                      <div className="shop__card--play banner__bideo--play">
                        <a className="shop__card--play__icon banner__bideo--play__icon glightbox" href="https://vimeo.com/115041822" data-gallery="video">
                          <svg id="play" xmlns="http://www.w3.org/2000/svg" width="40.302" height="40.302" viewBox="0 0 46.302 46.302">
                            <g id="Group_193" data-name="Group 193" transform="translate(0 0)">
                              <path id="Path_116" data-name="Path 116" d="M39.521,6.781a23.151,23.151,0,0,0-32.74,32.74,23.151,23.151,0,0,0,32.74-32.74ZM23.151,44.457A21.306,21.306,0,1,1,44.457,23.151,21.33,21.33,0,0,1,23.151,44.457Z" fill="currentColor" />
                              <g id="Group_188" data-name="Group 188" transform="translate(15.588 11.19)">
                                <g id="Group_187" data-name="Group 187">
                                  <path id="Path_117" data-name="Path 117" d="M190.3,133.213l-13.256-8.964a3,3,0,0,0-4.674,2.482v17.929a2.994,2.994,0,0,0,4.674,2.481l13.256-8.964a3,3,0,0,0,0-4.963Zm-1.033,3.435-13.256,8.964a1.151,1.151,0,0,1-1.8-.953V126.73a1.134,1.134,0,0,1,.611-1.017,1.134,1.134,0,0,1,1.185.063l13.256,8.964a1.151,1.151,0,0,1,0,1.907Z" transform="translate(-172.366 -123.734)" fill="currentColor" />
                                </g>
                              </g>
                              <g id="Group_190" data-name="Group 190" transform="translate(28.593 5.401)">
                                <g id="Group_189" data-name="Group 189">
                                  <path id="Path_118" data-name="Path 118" d="M328.31,70.492a18.965,18.965,0,0,0-10.886-10.708.922.922,0,1,0-.653,1.725,17.117,17.117,0,0,1,9.825,9.664.922.922,0,1,0,1.714-.682Z" transform="translate(-316.174 -59.724)" fill="currentColor" />
                                </g>
                              </g>
                              <g id="Group_192" data-name="Group 192" transform="translate(22.228 4.243)">
                                <g id="Group_191" data-name="Group 191">
                                  <path id="Path_119" data-name="Path 119" d="M249.922,47.187a19.08,19.08,0,0,0-3.2-.27.922.922,0,0,0,0,1.845,17.245,17.245,0,0,1,2.889.243.922.922,0,1,0,.31-1.818Z" transform="translate(-245.801 -46.917)" fill="currentColor" />
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span className="visually-hidden">Video Play</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End shop cards section */}
          {/* Start testimonial section */}
          <section className="testimonial__section testimonial__bg position__relative section--padding color-scheme-2">
            <div className="container">
              <div className="testimonial__bg--inner testimonial__activation--column1 swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial__items--style2 testimonial__items text-center">
                      <div className="testimonial__items--style2__thumbnail mb-10">
                        <img className="testimonial__items--style2__thumbnail--img border-radius-50" src="assets/img/other/testimonial-thumb1.png" alt="testimonial-img" />
                      </div>
                      <div className="testimonial__items--content">
                        <h2 className="testimonial__items--title text-white h3">Richard Anderson</h2>
                        <span className="testimonial__items--subtitle text-white">Nevada, USA</span>
                        <p className="testimonial__items--desc style2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial__items--style2 testimonial__items text-center">
                      <div className="testimonial__items--style2__thumbnail mb-10">
                        <img className="testimonial__items--style2__thumbnail--img border-radius-50" src="assets/img/other/testimonial-thumb2.png" alt="testimonial-img" />
                      </div>
                      <div className="testimonial__items--content">
                        <h2 className="testimonial__items--title text-white h3">Nike Mardson</h2>
                        <span className="testimonial__items--subtitle text-white">fashion</span>
                        <p className="testimonial__items--desc style2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial__items--style2 testimonial__items text-center">
                      <div className="testimonial__items--style2__thumbnail mb-10">
                        <img className="testimonial__items--style2__thumbnail--img border-radius-50" src="assets/img/other/testimonial-thumb3.png" alt="testimonial-img" />
                      </div>
                      <div className="testimonial__items--content">
                        <h2 className="testimonial__items--title text-white h3">Nike Mardson</h2>
                        <span className="testimonial__items--subtitle text-white">fashion</span>
                        <p className="testimonial__items--desc style2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial__pagination style2 swiper-pagination" />
              </div>
            </div>
          </section>
          {/* End testimonial section */}
          {/* Start contact section */}
          <section className="contact__section section--padding color-scheme-2">
            <div className="container-fluid">
              <div className="section__heading text-center mb-50">
                <h2 className="section__heading--maintitle style2">Get in touch</h2>
              </div>
              <div className="contact__section--inner">
                <div className="row">
                  <div className="col-lg-5 col-md-5">
                    <div className="home__contact--info">
                      <div className="home__contact--info__items d-flex">
                        <div className="home__contact--info__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="31.57" height="31.13" viewBox="0 0 31.57 31.13">
                            <path id="ic_account_balance_24px" d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z" transform="translate(-2 -1)" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="contact__info--content">
                          <h3 className="contact__info--content__title mb-5">Address</h3>
                          <p className="contact__info--content__desc">  123 Stree New York City ,
                            United States Of America
                            NY 750065.</p>
                        </div>
                      </div>
                      <div className="home__contact--info__items d-flex">
                        <div className="home__contact--info__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="31.568" height="31.128" viewBox="0 0 31.568 31.128">
                            <path id="ic_phone_forwarded_24px" d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z" transform="translate(-3 -1)" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="contact__info--content">
                          <h3 className="contact__info--content__title mb-5">Phone</h3>
                          <p className="contact__info--content__desc"><a href="tel:+01234-567890">+01234-567890</a> <br /> <a href="tel:++01234-5688765">+01234-5688765</a> </p>
                        </div>
                      </div>
                      <div className="home__contact--info__items d-flex">
                        <div className="home__contact--info__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="31.57" height="31.13" viewBox="0 0 31.57 31.13">
                            <path id="ic_email_24px" d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z" transform="translate(-2 -4)" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="contact__info--content">
                          <h3 className="contact__info--content__title mb-5">E-mail</h3>
                          <p className="contact__info--content__desc"> <a href="mailto:info@example.com">info@example.com</a> <br /> <a href="mailto:info@example.com">info@example.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <div className="home__contact--map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9938.68117036573!2d-0.132237!3d51.482566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x790260718555a20c!2sU.S.%20Embassy%2C%20London!5e0!3m2!1sen!2sbd!4v1640062764401!5m2!1sen!2sbd" width={600} height={380} style={{border: 0}} allowFullScreen loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End contact section */}
          {/* Start blog section */}
          <MiniSlider />
          {/* End blog section */}
        </main>
      );
}