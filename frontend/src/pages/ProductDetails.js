// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useProductContext } from "../context/productContext";
// import FormatPrice from "../components/helper/FormatPrice";
// import Breadcrumb from "../components/Breadcrumb";
// import Ratings from "../components/Ratings";
// import ProductImagesSlider from "../components/sliders/productImageSlider";
// import AddToCart from "../components/singleProduct/addToCart";
// import CategoryProductSlider from "../components/productDetails/categoryProductSlider";
// import { useCartContext } from "../context/cart_context";

// const API = 'http://localhost:5000/products/single';

// export default function ProductDetail(){
//     const {addToCart} = useCartContext();
//     const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const productid = searchParams.get("productid");

//   const {
//     ProductID,
//     ProductSKU,
//     ProductName,
//     ProductPrice,
//     ProductWeight,
//     Subtitle,
//     ProductShortDesc,
//     ProductLongDesc,
//     ProductSecondaryImage,
//     BadgeText,
//     ProductImage,
//     ProductCategoryID,
//     ProductUpdateDate,
//     ProductStock,
//     ProductLive,
//     ProductUnlimited,
//     ProductOldPrice,
//     ProductRating
//   } = singleProduct;

//   useEffect(() => {
//     getSingleProduct(`${API}?productid=${productid}`);
//   }, [productid]);

//       return (
// <div>
//     <main class="main__content_wrapper">

//         {/* navigation */}
//         <Breadcrumb title={singleProduct.ProductName} />

//         {/* product details */}
//         <section class="product__details--section section--padding">
//             <div class="container">
//                 <div class="row row-cols-lg-2 row-cols-md-2">
//                     <div class="col">
//                         <ProductImagesSlider images={[singleProduct.ProductImage,singleProduct.ProductSecondaryImage]} />
//                     </div>
//                     <div class="col">
//                         <div class="product__details--info">
//                             <form action="#">
//                                 <h2 class="product__details--info__title mb-15">{singleProduct.ProductName}</h2>
//                                 <p class="product__details--info__desc mb-15">{singleProduct.Subtitle}</p>
//                                 <div class="product__details--info__price mb-10">
//                                     <span class="current__price">{FormatPrice({price : singleProduct.ProductPrice})}</span>
//                                     <span class="price__divided"></span>
//                                     <span class="old__price">{FormatPrice({price : singleProduct.ProductOldPrice})}</span>
//                                 </div>

//                                 {/* rating */}
//                                 <Ratings rating="3.5" reviews="25" />

//                                 <p class="product__details--info__desc mb-15">{singleProduct.ProductShortDesc}</p>
//                                 <div class="product__variant">

//                                     {/* <AddToCart singleProduct={singleProduct} /> */}

//                                     <div class="product__details--info__meta">
//                                         <p class="product__details--info__meta--list"><strong>SKU:</strong>  <span>{singleProduct.ProductSKU}</span> </p>
//                                         <p class="product__details--info__meta--list"><strong>Available:</strong>  <span>{(singleProduct.ProductStock>0)?'InStock':'Out of Stock'}</span> </p>
//                                         <p class="product__details--info__meta--list"><i> {(singleProduct.ProductStock<1000)? singleProduct.ProductStock+' left Only!' :''} </i></p>
//                                         <p class="product__details--info__meta--list"><strong>Categories:</strong>  <span>{singleProduct.ProductCategoryID}</span> </p>
//                                     </div>
//                                 </div>
//                                 <div class="quickview__social d-flex align-items-center mb-15">
//                                     <label class="quickview__social--title">Social Share:</label>
//                                     <ul class="quickview__social--wrapper mt-0 d-flex">
//                                         <li class="quickview__social--list">
//                                             <a class="quickview__social--icon" target="_blank" href="https://www.facebook.com">
//                                                 <svg  xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
//                                                     <path  data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"/>
//                                                 </svg>
//                                                 <span class="visually-hidden">Facebook</span>
//                                             </a>
//                                         </li>
//                                         <li class="quickview__social--list">
//                                             <a class="quickview__social--icon" target="_blank" href="https://twitter.com">
//                                                 <svg  xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
//                                                     <path  data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"/>
//                                                 </svg>
//                                                 <span class="visually-hidden">Twitter</span>
//                                             </a>
//                                         </li>
//                                         <li class="quickview__social--list">
//                                             <a class="quickview__social--icon" target="_blank" href="https://www.instagram.com">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16.497" height="16.492" viewBox="0 0 19.497 19.492">
//                                                     <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"/>
//                                                 </svg>
//                                                 <span class="visually-hidden">Instagram</span>
//                                             </a>
//                                         </li>
//                                         <li class="quickview__social--list">
//                                             <a class="quickview__social--icon" target="_blank" href="https://www.youtube.com">
//                                                 <svg  xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
//                                                     <path  data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"/>
//                                                 </svg>
//                                                 <span class="visually-hidden">Youtube</span>
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div class="guarantee__safe--checkout">
//                                     <h5 class="guarantee__safe--checkout__title">Guaranteed Safe Checkout</h5>
//                                     <img class="guarantee__safe--checkout__img" src="assets/img/other/safe-checkout.png" alt="Payment Image"/>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//       {/*   <!-- End product details section -->*/ }

//     </main>

// </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import FormatPrice from "../components/helper/FormatPrice";
import Breadcrumb from "../components/Breadcrumb";
import Ratings from "../components/Ratings";
import ProductImagesSlider from "../components/sliders/productImageSlider";
import { useCartContext } from "../context/cart_context";

const API = "http://localhost:5000/products/single";

const ProductDetail = () => {
  const { addToCart } = useCartContext();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productid = searchParams.get("productid");

  useEffect(() => {
    getSingleProduct(`${API}?productid=${productid}`);
  }, [productid]);
  const color = ["red", "green", "yellow"];
  const weight = [5, 3, 2];
  const [amount, setAmount] = useState(5);

  const setDecrease = () => {
    setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  };

  const setIncrease = () => {
    setAmount((prevAmount) =>
      prevAmount < singleProduct.ProductStock ? prevAmount + 1 : prevAmount
    );
  };

  return (
    <div>
      <main className="main__content_wrapper">
        {/* navigation */}
        <Breadcrumb title={singleProduct.ProductName} />

        {/* product details */}
        <section className="product__details--section section--padding">
          <div className="container">
            <div className="row row-cols-lg-2 row-cols-md-2">
              <div className="col">
                <ProductImagesSlider
                  images={[
                    singleProduct.ProductImage,
                    singleProduct.ProductSecondaryImage,
                  ]}
                />
              </div>
              <div className="col">
                <div className="product__details--info">
                  <div>
                    <h2 className="product__details--info__title mb-15">
                      {singleProduct.ProductName}
                    </h2>
                    <p className="product__details--info__desc mb-15">
                      {singleProduct.Subtitle}
                    </p>
                    <div className="product__details--info__price mb-10">
                      <span className="current__price">
                        {FormatPrice({ price: singleProduct.ProductPrice })}
                      </span>
                      <span className="price__divided"></span>
                      <span className="old__price">
                        {FormatPrice({ price: singleProduct.ProductOldPrice })}
                      </span>
                    </div>
                    <Ratings
                      rating={singleProduct.ProductRating}
                      reviews={singleProduct.ProductRating}
                    />
                    <p className="product__details--info__desc mb-15">
                      {singleProduct.ProductShortDesc}
                    </p>

                    {/* Add to Cart section */}
                    <div className="product__variant">
                      <div className="product__details--info__meta">
                        <div className="product__variant--list mb-10">
                          <fieldset className="variant__input--fieldset">
                            <legend className="product__variant--title mb-8">
                              Color :
                            </legend>
                            {color.map((currColor, index) => (
                              <>
                                <input
                                  id={`color-${currColor}`}
                                  name="color"
                                  type="radio"
                                />
                                <label
                                  className={`variant__color--value ${currColor}`}
                                  htmlFor={`color-${currColor}`}
                                  title={currColor}
                                  style={{ backgroundColor: currColor }}
                                >
                                  <img
                                    className="variant__color--value__img"
                                    src=""
                                    alt=""
                                  />
                                </label>
                              </>
                            ))}
                          </fieldset>
                        </div>
                        <div className="product__variant--list mb-15">
                          <fieldset className="variant__input--fieldset weight">
                            <legend className="product__variant--title mb-8">
                              Weight :
                            </legend>
                            {/* ... weight input elements ... */}
                          </fieldset>
                        </div>

                        {/* AddCartBtn component functionality */}
                        <div className="product__variant--list quantity d-flex align-items-center mb-20">
                          <div className="quantity__box">
                            <button
                              type="button"
                              className="quantity__value quickview__value--quantity decrease"
                              onClick={() => setDecrease()}
                            >
                              -
                            </button>
                            <label>
                              <input
                                type="number"
                                className="quantity__number quickview__value--number"
                                value={amount}
                              />
                            </label>
                            <button
                              type="button"
                              className="quantity__value quickview__value--quantity increase"
                              value="Increase Value"
                              onClick={() => setIncrease()}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="quickview__cart--btn primary__btn"
                            onClick={() =>
                              addToCart(
                                singleProduct.ProductID,
                                "#000",
                                amount,
                                singleProduct
                              )
                            }
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                      <div class="product__details--info__meta">
                        <p class="product__details--info__meta--list">
                          <strong>SKU:</strong>{" "}
                          <span>{singleProduct.ProductSKU}</span>{" "}
                        </p>
                        <p class="product__details--info__meta--list">
                          <strong>Available:</strong>{" "}
                          <span>
                            {singleProduct.ProductStock > 0
                              ? "InStock"
                              : "Out of Stock"}
                          </span>{" "}
                        </p>
                        <p class="product__details--info__meta--list">
                          <i>
                            {" "}
                            {singleProduct.ProductStock < 1000
                              ? singleProduct.ProductStock + " left Only!"
                              : ""}{" "}
                          </i>
                        </p>
                        <p class="product__details--info__meta--list">
                          <strong>Categories:</strong>{" "}
                          <span>{singleProduct.ProductCategoryID}</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
