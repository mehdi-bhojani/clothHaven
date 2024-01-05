import React from 'react';
import FormatPrice from '../helper/FormatPrice';
import { NavLink } from 'react-router-dom';


function ProductItem(props) {
    return (
        <div className="col mb-30">
            <div className="product__items ">
                <div className="product__items--thumbnail">
                    <NavLink className="product__items--link" to={props.productDetailsLink}>
                        <img className="product__items--img product__primary--img" src={props.primaryImage} alt="product-img" />
                        <img className="product__items--img product__secondary--img" src={props.secondaryImage} alt="product-img" />
                    </NavLink>
                    <div className="product__badge">
                        <span className="product__badge--items sale">{props.badgeText}</span>
                    </div>
                   
                   
                </div>
                <div className="product__items--content text-center">
                    <span className="product__items--content__subtitle">{props.subtitle}</span>
                    <h3 className="product__items--content__title h4">
                        <a href={props.productDetailsLink}>{props.title}</a>
                    </h3>
                    <div className="product__items--price">
                        <span className="current__price">{FormatPrice({price : props.currentPrice})}</span>
                        <span className="price__divided" />
                        <span className="old__price">{FormatPrice({price : props.oldPrice})}</span>
                    </div>
                    <ul className="rating product__rating d-flex justify-content-center">
                        {/* Repeat the rating stars based on the value of props.rating */}
                        {Array.from({ length: props.rating }, (_, index) => (
                            <li className="rating__list" key={index}>
                                <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                        {/* Add your SVG path here */}
                                    </svg>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
