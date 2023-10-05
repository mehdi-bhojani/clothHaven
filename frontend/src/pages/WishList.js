import React, { useState, useEffect } from "react";
import MiniSlider from "../components/miniSlider";
import Product from "../components/wishList/product";
import { cartProducts as initialCartProducts } from "../json/cartProductJson"; // Rename the imported variable


export default function MyWishList() {
    const [wishlistProducts, setWishlistProducts] = useState(initialCartProducts); // Use a different name for the local state

    const removeFromCartProducts = (productId) => {
        console.log(`Removing product with ID: ${productId}`);
        const updatedWishlistProducts = wishlistProducts.filter((product) => product.productId !== productId);
        console.log(updatedWishlistProducts); // Log the updated products array
        setWishlistProducts(updatedWishlistProducts);
    };




    return (
        <main className="main__content_wrapper">
            {/* Start breadcrumb section */}

            <section className="breadcrumb__section breadcrumb__bg">
                <div className="container">
                    <div className="row row-cols-1">
                        <div className="col">
                            <div className="breadcrumb__content text-center">
                                <h1 className="breadcrumb__content--title text-white mb-25">
                                    Wishlist
                                </h1>
                                <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                    <li className="breadcrumb__content--menu__items">
                                        <a className="text-white" href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb__content--menu__items">
                                        <span className="text-white">Wishlist</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End breadcrumb section */}
            {/* cart section start */}
            <section className="cart__section section--padding">
                <div className="container">
                    <div className="cart__section--inner">
                        <form action="#">
                            <h2 className="cart__title mb-40">Wishlist</h2>
                            <div className="cart__table">
                                <table className="cart__table--inner">
                                    <thead className="cart__table--header">
                                        <tr className="cart__table--header__items">
                                            <th className="cart__table--header__list">Product</th>
                                            <th className="cart__table--header__list">Price</th>
                                            <th className="cart__table--header__list text-center">
                                                STOCK STATUS
                                            </th>
                                            <th className="cart__table--header__list text-right">
                                                ADD TO CART
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="cart__table--body">
                                        {wishlistProducts.map((elem) => (
                                            <Product
                                                key={elem.productId} // Use "productId" here
                                                productName={elem.productName}
                                                productImage={elem.productImage}
                                                productDetailsLink={elem.productDetailsLink}
                                                productColor={elem.productColor}
                                                productWeight={elem.productWeight}
                                                productPrice={elem.productPrice}
                                                productAvailability={elem.productAvailability}
                                                onRemove={() => removeFromCartProducts(elem.productId)} // Use "productId" here
                                            />
                                        ))}

                                    </tbody>


                                </table>
                                <div className="continue__shopping d-flex justify-content-between">
                                    <a className="continue__shopping--link" href="index.html">
                                        Continue shopping
                                    </a>
                                    <a className="continue__shopping--clear" href="shop.html">
                                        View All Products
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* cart section end */}
            {/* Start product section */}
            <section className="product__section product__section--style3 section--padding pt-0">
                <div className="container product3__section--container">
                    <div class="section__heading text-center mb-50">
                        <h2 class="section__heading--maintitle">New Products</h2>
                    </div>

                    <MiniSlider
                        productDetailsLink="product-details.html"
                        primaryImage="assets/img/product/product1.png"
                        secondaryImage="assets/img/product/product2.png"
                        badgeText="Sale"
                        subtitle="Jacket, Women"
                        title="Oversize Cotton Dress"
                        currentPrice="$110"
                        oldPrice="$78"
                        rating={3} // Example rating value
                        addToCartLink="cart.html"
                        wishlistLink="wishlist.html"
                        quickViewLink="javascript:void(0)"
                    />
                </div>
            </section>
            {/* End product section */}
            {/* Start brand logo section */}
            <div className="brand__logo--section bg__secondary section--padding">
                <div className="container-fluid">
                    <div className="row row-cols-1">
                        <div className="col">
                            <div className="brand__logo--section__inner d-flex justify-content-center align-items-center">
                                <div className="brand__logo--items">
                                    <img
                                        className="brand__logo--items__thumbnail--img display-block"
                                        src="assets/img/logo/brand-logo1.png"
                                        alt="brand logo"
                                    />
                                </div>
                                <div className="brand__logo--items">
                                    <img
                                        className="brand__logo--items__thumbnail--img display-block"
                                        src="assets/img/logo/brand-logo2.png"
                                        alt="brand logo"
                                    />
                                </div>
                                <div className="brand__logo--items">
                                    <img
                                        className="brand__logo--items__thumbnail--img display-block"
                                        src="assets/img/logo/brand-logo3.png"
                                        alt="brand logo"
                                    />
                                </div>
                                <div className="brand__logo--items">
                                    <img
                                        className="brand__logo--items__thumbnail--img display-block"
                                        src="assets/img/logo/brand-logo4.png"
                                        alt="brand logo"
                                    />
                                </div>
                                <div className="brand__logo--items">
                                    <img
                                        className="brand__logo--items__thumbnail--img display-block"
                                        src="assets/img/logo/brand-logo5.png"
                                        alt="brand logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End brand logo section */}
            {/* Start shipping section */}
            <section className="shipping__section2 shipping__style3 section--padding">
                <div className="container">
                    <div className="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
                        <div className="shipping__items2 d-flex align-items-center">
                            <div className="shipping__items2--icon">
                                <img src="assets/img/other/shipping1.png" alt="" />
                            </div>
                            <div className="shipping__items2--content">
                                <h2 className="shipping__items2--content__title h3">Shipping</h2>
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
