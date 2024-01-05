import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "../../buttons/CartBtn";
import WishlistBtn from "../../buttons/WishlistBtn";
import Ratings from "../../Ratings";

function GridItem({
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
}) {
  return (
    <>
      <div className="col mb-30">
        <div className="product__items ">
          <div className="product__items--thumbnail">
            <NavLink
              className="product__items--link"
              to={`/product?productid=${productId}`}
            >
              <img
                className="product__items--img product__primary--img"
                src={imageUrl}
                alt="product-img"
              />
            </NavLink>

            <div className="product__badge">
              <span className={`product__badge--items ${badge}`}>{badge}</span>
            </div>
          </div>
          <div className="product__items--content">
            <span className="product__items--content__subtitle">
              {subtitle}
            </span>
            <h3 className="product__items--content__title h4">
              <a href="product-details.html">{title}</a>
            </h3>
            <div className="product__items--price">
              <span className="current__price">{currentPrice}</span>
              <span className="price__divided" />
              <span className="old__price">{oldPrice}</span>
            </div>
            <ul className="rating product__rating d-flex">
              <Ratings rating={rating} />
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default GridItem;
