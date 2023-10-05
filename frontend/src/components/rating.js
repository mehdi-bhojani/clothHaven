import React from "react";

function Rating({ rating }) {
  // Function to generate an array of star elements based on the rating
  const renderStars = () => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      // Determine if the current star should be filled or empty based on the rating
      const isFilled = i < rating;
      starIcons.push(
        <svg
          key={i}
          className={`rating__list--icon__svg ${isFilled ? "filled" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="14.105"
          height="14.732"
          viewBox="0 0 10.105 9.732"
        >
          <path
            data-name="star - Copy"
            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
            transform="translate(0 -0.018)"
            fill={isFilled ? "currentColor" : "none"}
          />
        </svg>
      );
    }
    return starIcons;
  };

  return <div className="rating">{renderStars()}</div>;
}

export default Rating;
