import React, { useState } from "react";
import AddCartBtn from "./addCartBtn";

function AddToCart({singleProduct}) {

  const [amount, setAmount] = useState(5);
  const { ProductStock } = singleProduct;

  const color = ["red", "green", "yellow"];
  const weight = [5, 3, 2];

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < ProductStock ? setAmount(amount + 1) : setAmount(amount);
  };

  return (
    <>
      <div class="product__variant--list mb-10">
        <fieldset class="variant__input--fieldset">
          <legend class="product__variant--title mb-8">Color :</legend>
          {color.map((currColor, index) => (
                <>
              <input id={`color-${currColor}`} name="color" type="radio" />
              <label
                className={`variant__color--value ${currColor}`}
                htmlFor={`color-${currColor}`}
                title={currColor}
              >
                <img
                  className="variant__color--value__img"
                  src="assets/img/product/product1.png"
                  alt="variant-color-img"
                />
              </label>
              </>
          ))}
        </fieldset>
      </div>
      <div class="product__variant--list mb-15">
        <fieldset class="variant__input--fieldset weight">
          <legend class="product__variant--title mb-8">Weight :</legend>
          {weight.map((currWeight, index) => (
            <>
              <input id={`weight` + index} name="weight" type="radio" checked />
              <label class="variant__size--value red" for={`weight` + index}>
                {currWeight} kg
              </label>
            </>
          ))}
        </fieldset>
      </div>
      <AddCartBtn
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
        singleProduct={singleProduct}
      />
    </>
  );
}

export default AddToCart;
