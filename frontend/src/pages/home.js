import React from "react";
import HeroSlider from "../components/heroSlider";
import MiniSlider from "../components/miniSlider";
import { NavLink, useLocation } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import ProductItem from "../components/home/productItems";

export default function Home() {
  const { products } = useProductContext();
  const location = useLocation();
  const { pathname } = location;
  return (
    <main className="main__content_wrapper">
      <HeroSlider />
      <section className="banner__section banner__style2 section--padding color-scheme-2">
        <div className="section__heading text-center mb-35">
          <h2 className="section__heading--maintitle style2">
            Shop by Categories
          </h2>
        </div>
        <div className="container-fluid">
          <div className="row mb--n28">
            <div className="col-lg-4 col-md-order mb-28">
              <div className="banner__items position__relative">
                <NavLink className="banner__items--thumbnail " to="shop">
                  <img
                    className="banner__items--thumbnail__img"
                    src="assets/img/banner/banner7.png"
                    alt="banner-img"
                  />
                  <div className="banner__items--content style2">
                    <h3 className="banner__items--content__title style2">
                      NEW <br />
                      ACCESSORIES
                    </h3>
                    <span className="banner__items--content__link style2">
                      SHOP NOW
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="banner__style2--top__sidebar d-flex">
                <div className="banner__items position__relative mr-30 mb-28">
                  <NavLink className="banner__items--thumbnail" to="shop">
                    <img
                      className="banner__items--thumbnail__img banner__img--max__height"
                      src="assets/img/banner/banner8.png"
                      alt="banner-img"
                    />
                    <div className="banner__items--content style2">
                      <h3 className="banner__items--content__title style2">
                        NEW <br />
                        ACCESSORIES
                      </h3>
                      <span className="banner__items--content__link style2">
                        SHOP NOW
                      </span>
                    </div>
                  </NavLink>
                </div>
                <div className="banner__items position__relative mb-28">
                  <NavLink className="banner__items--thumbnail" to="shop">
                    <img
                      className="banner__items--thumbnail__img"
                      src="assets/img/banner/banner9.png"
                      alt="banner-img"
                    />
                    <div className="banner__items--content style2">
                      <h3 className="banner__items--content__title style2">
                        TRENDING <br />
                        NOW
                      </h3>
                      <span className="banner__items--content__link style2">
                        SHOP NOW
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="row row-cols-sm-2 row-cols-1">
                <div className="col mb-28">
                  <div className="banner__items position__relative">
                    <NavLink className="banner__items--thumbnail" to="shop">
                      <img
                        className="banner__items--thumbnail__img banner__img--max__height"
                        src="assets/img/banner/banner10.png"
                        alt="banner-img"
                      />
                      <div className="banner__items--content style2">
                        <h3 className="banner__items--content__title style2">
                          TOP <br />
                          SELLER
                        </h3>
                        <span className="banner__items--content__link style2">
                          SHOP NOW
                        </span>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="col mb-28">
                  <div className="banner__items position__relative">
                    <NavLink className="banner__items--thumbnail" to="shop">
                      <img
                        className="banner__items--thumbnail__img banner__img--max__height"
                        src="assets/img/banner/banner11.png"
                        alt="banner-img"
                      />
                      <div className="banner__items--content style2 right">
                        <h3 className="banner__items--content__title style2">
                          TOP <br />
                          DECORATION
                        </h3>
                        <span className="banner__items--content__link style2">
                          SHOP NOW
                        </span>
                      </div>
                    </NavLink>
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
            <h2 className="section__heading--maintitle style2">
              Summer Collection
            </h2>
          </div>
          <div className="product__section--inner">
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
              {products.map((currElem) =>
                // Use a conditional rendering check here
                currElem.ProductCategoryID === 1 ? (
                  <ProductItem
                    key={currElem.ProductID}
                    productDetailsLink={`product?productid=${currElem.ProductID}`}
                    primaryImage={currElem.ProductImage}
                    secondaryImage={currElem.ProductSecondaryImage}
                    badgeText={currElem.BadgeText}
                    badgeClass="sale" // Add the appropriate class for styling
                    addToCartLink="/add-to-cart/123"
                    wishlistLink="/wishlist/123"
                    quickViewLink="/quick-view/123"
                    subtitle={currElem.Subtitle}
                    title={currElem.ProductName}
                    currentPrice={currElem.ProductPrice}
                    oldPrice={currElem.ProductOldPrice}
                    rating={currElem.ProductRating}
                  />
                ) : null
              )}
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
                  <NavLink className="banner__items--thumbnail " to="shop">
                    <img
                      className="banner__items--thumbnail__img"
                      src="assets/img/banner/banner12.png"
                      alt="banner-img"
                    />
                  </NavLink>
                </div>
              </div>
              <div className="col">
                <div className="banner__items banner__discount--items position__relative">
                  <NavLink className="banner__items--thumbnail " to="shop">
                    <img
                      className="banner__items--thumbnail__img"
                      src="assets/img/banner/banner13.png"
                      alt="banner-img"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="banner__discount--content text-center">
              <span className="banner__discount--content__subtitle">
                Summer Collection 2022
              </span>
              <h2 className="banner__discount--content__title h3">
                Get 35% Diseount For <br />
                Couple Special
              </h2>
              <NavLink className="banner__discount--content__link" to="shop">
                SHOP NOW
              </NavLink>
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
                <NavLink
                  className="banner__items--thumbnail width-100 "
                  to="shop"
                >
                  <img
                    className="banner__items--thumbnail__img width-100"
                    src="assets/img/banner/banner14.png"
                    alt="banner-img"
                  />
                  <div className="banner__items--content__style3">
                    <span className="banner__items--content__style3--subtitle text-white">
                      Wmen's Collection
                    </span>
                    <h2 className="banner__items--content__style3--title text-white h3">
                      {" "}
                      Min.40-70% Off
                    </h2>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col mb-30">
              <div className="product__grid--wrapper">
                <div className="product__grid--heading mb-30">
                  <h2 className="product__grid--heading__maintitle position__relative">
                    Featured
                  </h2>
                </div>
                <div className="product__grid--inner">
                  <div className="product__items product__items--grid d-flex align-items-center">
                    <div className="product__items--grid__thumbnail position__relative">
                      <NavLink
                        className="product__items--link"
                        href="product-details.html"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/small-product1.png"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/small-product2.png"
                          alt="product-img"
                        />
                      </NavLink>
                    </div>
                    <div className="product__items--grid__content">
                      <h3 className="product__items--content__title h4">
                        <NavLink href="product-details.html">
                          Women Fish Cut Cloth
                        </NavLink>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$110</span>
                        <span className="price__divided" />
                        <span className="old__price">$78</span>
                      </div>
                      <ul className="rating product__rating d-flex">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__items product__items--grid d-flex align-items-center">
                    <div className="product__items--grid__thumbnail position__relative">
                      <NavLink
                        className="product__items--link"
                        href="product-details.html"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/small-product3.png"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/small-product4.png"
                          alt="product-img"
                        />
                      </NavLink>
                    </div>
                    <div className="product__items--grid__content">
                      <h3 className="product__items--content__title h4">
                        <NavLink href="product-details.html">
                          Gorgeous Granite Clock
                        </NavLink>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$140</span>
                        <span className="price__divided" />
                        <span className="old__price">$115</span>
                      </div>
                      <ul className="rating product__rating d-flex">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__items product__items--grid d-flex align-items-center">
                    <div className="product__items--grid__thumbnail position__relative">
                      <NavLink
                        className="product__items--link"
                        href="product-details.html"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/small-product5.png"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/small-product6.png"
                          alt="product-img"
                        />
                      </NavLink>
                    </div>
                    <div className="product__items--grid__content">
                      <h3 className="product__items--content__title h4">
                        <NavLink href="product-details.html">
                          Durable Steel Knife
                        </NavLink>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$160</span>
                        <span className="price__divided" />
                        <span className="old__price">$118</span>
                      </div>
                      <ul className="rating product__rating d-flex">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
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
                <NavLink
                  className="banner__items--thumbnail md-width-100"
                  to="shop"
                >
                  <img
                    className="banner__items--thumbnail__img md-width-100"
                    src="assets/img/banner/banner15.png"
                    alt="banner-img"
                  />
                  <div className="banner__items--content__style3">
                    <span className="banner__items--content__style3--subtitle text-white">
                      Wmen's Collection
                    </span>
                    <h2 className="banner__items--content__style3--title text-white h3">
                      {" "}
                      Min.40-70% Off
                    </h2>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col mb-30">
              <div className="product__grid--wrapper">
                <div className="product__grid--heading mb-30">
                  <h2 className="product__grid--heading__maintitle position__relative">
                    Bestsellers
                  </h2>
                </div>
                <div className="product__grid--inner">
                  <div className="product__items product__items--grid d-flex align-items-center">
                    <div className="product__items--grid__thumbnail position__relative">
                      <NavLink
                        className="product__items--link"
                        href="product-details.html"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/small-product2.png"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/small-product1.png"
                          alt="product-img"
                        />
                      </NavLink>
                    </div>
                    <div className="product__items--grid__content">
                      <h3 className="product__items--content__title h4">
                        <NavLink href="product-details.html">
                          Women White T-Shirt
                        </NavLink>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$110</span>
                        <span className="price__divided" />
                        <span className="old__price">$78</span>
                      </div>
                      <ul className="rating product__rating d-flex">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__items product__items--grid d-flex align-items-center">
                    <div className="product__items--grid__thumbnail position__relative">
                      <NavLink
                        className="product__items--link"
                        href="product-details.html"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/small-product4.png"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/small-product3.png"
                          alt="product-img"
                        />
                      </NavLink>
                    </div>
                    <div className="product__items--grid__content">
                      <h3 className="product__items--content__title h4">
                        <NavLink href="product-details.html">
                          Women Modern Bags
                        </NavLink>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$140</span>
                        <span className="price__divided" />
                        <span className="old__price">$115</span>
                      </div>
                      <ul className="rating product__rating d-flex">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__items product__items--grid d-flex align-items-center">
                    <div className="product__items--grid__thumbnail position__relative">
                      <NavLink
                        className="product__items--link"
                        href="product-details.html"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/small-product6.png"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/small-product5.png"
                          alt="product-img"
                        />
                      </NavLink>
                    </div>
                    <div className="product__items--grid__content">
                      <h3 className="product__items--content__title h4">
                        <NavLink href="product-details.html">
                          Smart Blazar for Men
                        </NavLink>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$160</span>
                        <span className="price__divided" />
                        <span className="old__price">$118</span>
                      </div>
                      <ul className="rating product__rating d-flex">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
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
                              />
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
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src="assets/img/logo/brand-logo1.png"
                    alt="brand logo img"
                  />
                </div>
                <div className="brand__logo--items">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src="assets/img/logo/brand-logo2.png"
                    alt="brand logo img"
                  />
                </div>
                <div className="brand__logo--items">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src="assets/img/logo/brand-logo3.png"
                    alt="brand logo img"
                  />
                </div>
                <div className="brand__logo--items">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src="assets/img/logo/brand-logo4.png"
                    alt="brand logo img"
                  />
                </div>
                <div className="brand__logo--items">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src="assets/img/logo/brand-logo5.png"
                    alt="brand logo img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End brand logo section */}
      
      
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.57"
                        height="31.13"
                        viewBox="0 0 31.57 31.13"
                      >
                        <path
                          id="ic_account_balance_24px"
                          d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z"
                          transform="translate(-2 -1)"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="contact__info--content">
                      <h3 className="contact__info--content__title mb-5">
                        Address
                      </h3>
                      <p className="contact__info--content__desc">
                        {" "}
                        123 Stree New York City , United States Of America NY
                        750065.
                      </p>
                    </div>
                  </div>
                  <div className="home__contact--info__items d-flex">
                    <div className="home__contact--info__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.568"
                        height="31.128"
                        viewBox="0 0 31.568 31.128"
                      >
                        <path
                          id="ic_phone_forwarded_24px"
                          d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z"
                          transform="translate(-3 -1)"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="contact__info--content">
                      <h3 className="contact__info--content__title mb-5">
                        Phone
                      </h3>
                      <p className="contact__info--content__desc">
                        <NavLink href="tel:+01234-567890">
                          +01234-567890
                        </NavLink>{" "}
                        <br />{" "}
                        <NavLink href="tel:++01234-5688765">
                          +01234-5688765
                        </NavLink>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="home__contact--info__items d-flex">
                    <div className="home__contact--info__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.57"
                        height="31.13"
                        viewBox="0 0 31.57 31.13"
                      >
                        <path
                          id="ic_email_24px"
                          d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z"
                          transform="translate(-2 -4)"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="contact__info--content">
                      <h3 className="contact__info--content__title mb-5">
                        E-mail
                      </h3>
                      <p className="contact__info--content__desc">
                        {" "}
                        <NavLink href="mailto:info@example.com">
                          info@example.com
                        </NavLink>{" "}
                        <br />{" "}
                        <NavLink href="mailto:info@example.com">
                          info@example.com
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="home__contact--map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9938.68117036573!2d-0.132237!3d51.482566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x790260718555a20c!2sU.S.%20Embassy%2C%20London!5e0!3m2!1sen!2sbd!4v1640062764401!5m2!1sen!2sbd"
                    width={600}
                    height={380}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End contact section */}
      {/* Start blog section */}
      {/* End blog section */}
    </main>
  );
}
