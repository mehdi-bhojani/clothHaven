const FilterReducer = (state, action) => {
  switch (action.type) {
    // when loading filter products
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.ProductPrice);
      console.log(
        "🚀 ~ file: filterReducer.js ~ line 5 ~ filterReducer ~ priceArr",
        priceArr
      );

      let maxPrice = Math.max(...priceArr);
      console.log(
        "🚀 ~ file: filterReducer.js ~ line 23 ~ filterReducer ~ maxPrice",
        maxPrice
      );
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: 0 },
      };

    case "GET_SORT_VALUE":
      const userSortValue = document.getElementById("SortProductsOption");
      const sort_value =
        userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: sort_value,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortProducts = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.ProductPrice - b.ProductPrice;
        }
        if (sorting_value === "highest") {
          return b.ProductPrice - a.ProductPrice;
        }
        if (sorting_value === "a-z") {
          return a.ProductName.localeCompare(b.ProductName);
        }
        if (sorting_value === "z-a") {
          return b.ProductName.localeCompare(a.ProductName);
        }
      };

      newSortData = tempSortProducts.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { text, category, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.ProductName.toLowerCase().includes(
            text.toLowerCase()
          );
        });
      }

      if (category) {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.CategoryName === category;
        });
      }

      if (category == "All") {
        tempFilterProducts = [...all_products];
      }

      if (price == 0) {
        tempFilterProducts = tempFilterProducts;
      } else {
        tempFilterProducts = tempFilterProducts.filter(
          (currElem) => currElem.ProductPrice <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          price: 0,
        },
      };
    default:
      return state;
  }
};

export default FilterReducer;
