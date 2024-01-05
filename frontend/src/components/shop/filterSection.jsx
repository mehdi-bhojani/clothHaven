import React, { useState } from "react";
import { useFilterContext } from "../../context/filterContext";
import { useProductContext } from "../../context/productContext";

function FilterSection() {
  const {
    all_products,
    filters: { text, price, maxPrice, minPrice },
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    if (!data) {
      console.error("Data is undefined or null.");
      return [];
    }
    let newData = data.map((currElem) => {
      return currElem[property];
    });
    newData = ["All", ...new Set(newData)];
    return newData;
  };

  const categoryDataOnly = getUniqueData(all_products, "CategoryName");

  const { productOptions } = useProductContext();

  // Initialize arrays for colors, sizes, and weights
  const colors = [];
  const sizes = [];
  const weights = [];

  // Iterate over the productOptions array
  productOptions.forEach((product) => {
    // Extract unique color values
    if (product.color) {
      product.color.forEach((color) => {
        if (!colors.includes(color)) {
          colors.push(color);
        }
      });
    }

    // Extract unique size values
    if (product.size) {
      product.size.forEach((size) => {
        if (!sizes.includes(size)) {
          sizes.push(size);
        }
      });
    }

    // Extract unique weight values
    if (product.weight) {
      product.weight.forEach((weight) => {
        if (!weights.includes(weight)) {
          weights.push(weight);
        }
      });
    }
  });

  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleCheckboxChange = (size) => {
    // Check if the size is already selected
    if (selectedSizes.includes(size)) {
      // If selected, remove it
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      // If not selected, add it
      setSelectedSizes([...selectedSizes, size]);
    }
    console.log(selectedSizes);
  };

  return (
    <>
      <div className="col-xl-3 col-lg-4">
        <div className="shop__sidebar--widget widget__area d-none d-lg-block">
          <div className="single__widget widget__bg">
            <h2 className="widget__title h3">Categories</h2>
            <ul className="widget__categories--menu">
              {categoryDataOnly.map((currElem, index) => (
                <li className="widget__categories--menu__list">
                  <button
                    className="widget__categories--menu__label"
                    type="button"
                    name="category"
                    value={currElem}
                    onClick={updateFilterValue}
                  >
                    <img
                      className="widget__categories--menu__img"
                      src={"assets/img/product/small-product"+(index+1)+".png"}
                      alt="categories-img"
                    />
                    <span className="widget__categories--menu__text">
                      {currElem}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="single__widget widget__bg" style={{display:"none"}}>
            <h2 className="widget__title h3">Sizes</h2>
            <ul className="widget__form--check">
              {sizes.map((currElem) => (
                <li className="widget__form--check__list">
                  <label
                    className="widget__form--check__label"
                    htmlFor="check1"
                  >
                    {currElem}
                  </label>
                  <input
                    className="widget__form--check__input"
                    id="check1"
                    type="checkbox"
                    onChange={() => handleCheckboxChange(currElem)}
                  />
                  <span className="widget__form--checkmark" />
                </li>
              ))}
            </ul>
          </div>
          <div className="single__widget price__filter widget__bg">
            <h2 className="widget__title h3">Filter By Price</h2>
            <div className="price__filter--form">
              <div className="price__filter--form__inner mb-15 d-flex align-items-center">
                <div className="price__filter--group">
                  <input
                    type="range"
                    id="price"
                    name="price"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={updateFilterValue}
                  />
                  <label for="volume">Price : {price}</label>
                </div>
              </div>
            </div>
          </div>
          <div className="single__widget price__filter widget__bg">
            <h2 className="widget__title h3">Clear Filters</h2>
            <div className="price__filter--form">
              <div className="price__filter--form__inner mb-15 d-flex align-items-center">
                <div className="price__filter--group">
                <button class="price__filter--btn primary__btn" onClick={clearFilters}>Clear Filter</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default FilterSection;
