import React from "react";
import Ratings from "../../Ratings";
import CartBtn from "../../buttons/CartBtn";
import WishlistBtn from "../../buttons/WishlistBtn";
import { NavLink } from "react-router-dom";

const ListItem = ({
  productId,
  imageUrl,
  title,
  subtitle,
  currentPrice,
  oldPrice,
  rating,
  description,
  badge,
  addToCartHandler,
  addToWishlistHandler,
  quickViewHandler,
}) => {
  return (
    <div className="col mb-30">
      <div className="product__items product__list--items d-flex">
        <div className="product__items--thumbnail product__list--items__thumbnail">
          <NavLink className="product__items--link" to={`/product?productid=${productId}`}>
            <img
              className="product__items--img product__primary--img"
              src={imageUrl}
              alt="product-img"
            />
            {/* Add secondary image if needed */}
          </NavLink>
          {badge ? (
            <div className="product__badge">
              <span className="product__badge--items sale">{badge}</span>
            </div>
          ) : null}
        </div>
        <div className="product__list--items__content">
          <span className="product__items--content__subtitle mb-5">
            {subtitle}
          </span>
          <h3 className="product__list--items__content--title h4 mb-10">
            <a href="product-details.html">{title}</a>
          </h3>
          <div className="product__list--items__price mb-10">
            <span className="current__price">{currentPrice}</span>
            <span className="price__divided" />
            <span className="old__price">{oldPrice}</span>
          </div>
          <ul className="rating product__rating d-flex">
            <Ratings rating={rating} />
          </ul>
          <p className="product__list--items__content--desc  d-xl-block mb-15">
            {description}
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default ListItem;
