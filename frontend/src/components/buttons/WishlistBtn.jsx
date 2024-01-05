import React from 'react'
import { NavLink } from 'react-router-dom'


function WishlistBtn({href,action}) {
  return (
    <a
    className="product__items--action__btn"
    NavLink = {href}
    onClick={action}
  >
    <svg
      className="product__items--action__btn--svg"
      xmlns="http://www.w3.org/2000/svg"
      width="25.51"
      height="23.443"
      viewBox="0 0 512 512"
    >
      <path
        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
    <span className="visually-hidden">Wishlist</span>
  </a>
  )
}

export default WishlistBtn