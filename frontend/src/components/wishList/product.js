  import React from "react";


  function Product(props) {
    return (
      <tr className="cart__table--body__items">
        <td className="cart__table--body__list">
          <div className="cart__product d-flex align-items-center">
            <button
              className="cart__remove--btn"
              aria-label="search button"
              type="button"
               onClick={props.onRemove} // Use the "onRemove" prop for the click event
            >
              X
            </button>
            <div className="cart__thumbnail">
              <a href={props.productDetailsLink}>
                <img
                  className="border-radius-5"
                  src={props.productImage}
                  alt="cart-product"
                />
              </a>
            </div>
            <div className="cart__content">
              <h4 className="cart__content--title">
                <a href={props.productDetailsLink}>{props.productName}</a>
              </h4>
              <span className="cart__content--variant">
                COLOR: {props.productColor}
              </span>
              <span className="cart__content--variant">
                WEIGHT: {props.productWeight}
              </span>
            </div>
          </div>
        </td>
        <td className="cart__table--body__list">
          <span className="cart__price">{props.productPrice}</span>
        </td>
        <td className="cart__table--body__list text-center">
          <span className="in__stock text__secondary">{props.productAvailability}</span>
        </td>
        <td className="cart__table--body__list text-right">
          <a className="wishlist__cart--btn primary__btn" href="cart.html">
            Add To Cart
          </a>
        </td>
      </tr>
    );
  }

  export default Product;
