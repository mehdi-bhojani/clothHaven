import React from "react";
import { useProductContext } from "../../context/productContext";
import { useCartContext } from "../../context/cart_context";


function AddCartBtn({ amount, setDecrease, setIncrease, singleProduct }) {
  const {addToCart} = useCartContext();

  return (
    <>
      <div class="product__variant--list quantity d-flex align-items-center mb-20">
        <div class="quantity__box">
          <button
            type="button"
            class="quantity__value quickview__value--quantity decrease"
            onClick={() => setDecrease()}
          >
            -
          </button>
          <label>
            <input type="number" class="quantity__number quickview__value--number" value={amount}/>
              
            {/* </span> */}
          </label>
          <button
            type="button"
            class="quantity__value quickview__value--quantity increase"
            value="Increase Value"
            onClick={() => setIncrease()}
          >
            +
          </button>
        </div>
        <button class="quickview__cart--btn primary__btn" onClick={()=>addToCart(995, "a", 50, {})}>
          Add To Cart
        </button>
      </div>
      <div class="product__variant--list mb-15">
        <a
          class="variant__wishlist--icon mb-15"
          href="wishlist.html"
          title="Add to wishlist"
        >
          <svg
            class="quickview__variant--wishlist__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
          Add to Wishlist
        </a>
        <button class="variant__buy--now__btn primary__btn" type="submit">
          Buy it now
        </button>
      </div>
    </>
  );
}

export default AddCartBtn;
