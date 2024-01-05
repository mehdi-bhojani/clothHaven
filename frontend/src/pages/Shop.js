import React from "react";
import ProductItem from "../components/shop/productItem";
import Breadcrumb from "../components/Breadcrumb";
import Sort from "../components/shop/sort";
import FilterSection from "../components/shop/filterSection";
import AllProducts from "../components/shop/allProducts";
import { useState } from "react";

export default function Shop() {
  const [viewType, setViewType] = useState("grid");
  return (
    <main className="main__content_wrapper">
      
      {/* Start breadcrumb section */}
      <Breadcrumb title="Shop" />
      {/* End breadcrumb section */}

      {/* Start shop section */}
      <section className="shop__section section--padding">
        <div className="container-fluid">
        <Sort changeViewType={setViewType} />
          <div className="row">
            <FilterSection />
            <AllProducts view={viewType} />
          </div>
        </div>
      </section>
      {/* End shop section */}
      
      {/* Start shipping section */}
      <section className="shipping__section2 shipping__style3 section--padding pt-0">
        <div className="container">
          <div className="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
            <div className="shipping__items2 d-flex align-items-center">
              <div className="shipping__items2--icon">
                <img src="assets/img/other/shipping1.png" alt="" />
              </div>
              <div className="shipping__items2--content">
                <h2 className="shipping__items2--content__title h3">
                  Shipping
                </h2>
                <p className="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div className="shipping__items2 d-flex align-items-center">
              <div className="shipping__items2--icon">
                <img src="assets/img/other/shipping2.png" alt="" />
              </div>
              <div className="shipping__items2--content">
                <h2 className="shipping__items2--content__title h3">Payment</h2>
                <p className="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div className="shipping__items2 d-flex align-items-center">
              <div className="shipping__items2--icon">
                <img src="assets/img/other/shipping3.png" alt="" />
              </div>
              <div className="shipping__items2--content">
                <h2 className="shipping__items2--content__title h3">Return</h2>
                <p className="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div className="shipping__items2 d-flex align-items-center">
              <div className="shipping__items2--icon">
                <img src="assets/img/other/shipping4.png" alt="" />
              </div>
              <div className="shipping__items2--content">
                <h2 className="shipping__items2--content__title h3">Support</h2>
                <p className="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End shipping section */}
    </main>
  );
}
