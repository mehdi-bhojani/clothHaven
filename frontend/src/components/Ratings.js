import React from "react";

export default function Ratings(props) {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <li key={index} className="rating__list">
      <span className="danger rating__list--icon">
        <svg
          className="rating__list--icon__svg"
          xmlns="http://www.w3.org/2000/svg"
          width="14.105"
          height="14.732"
          viewBox="0 0 10.105 9.732"
        >
          <path
            data-name="star - Outline"
            d="M9.837,3.5,6.73,3.039,5.338,.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
            transform="translate(0 -0.018)"
            fill="yellow"
            stroke="yellow"
            strokeWidth="1"
          ></path>
        </svg>
      </span>
    </li>
  ));

  const emptyStars = Array.from({ length: Math.max(0, 5 - props.rating) }, (_, index) => (
    <li key={index} className="rating__list">
      <span className="danger rating__list--icon">
        <svg
          className="rating__list--icon__svg"
          xmlns="http://www.w3.org/2000/svg"
          width="14.105"
          height="14.732"
          viewBox="0 0 10.105 9.732"
        >
          <path
            data-name="star - Outline"
            d="M9.837,3.5,6.73,3.039,5.338,.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
            transform="translate(0 -0.018)"
            fill="none"
            stroke="yellow"
            strokeWidth="1"
          ></path>
        </svg>
      </span>
    </li>
  ));

  return (
    <div className="product__details--info__rating d-flex align-items-center mb-15">
      <ul className="rating d-flex justify-content-center">
        {stars}
        {emptyStars}
      </ul>
      {props.reviews ? (
      <span className="product__items--rating__count--number">
        {props.reviews}
      </span>
    ) : null}
    </div>
  );
}