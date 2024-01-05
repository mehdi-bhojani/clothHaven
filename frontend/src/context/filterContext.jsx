import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

// initial state for filter context
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters : {
    text : "",
    category: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  // all products from productContext
  const { products } = useProductContext();

  // initializing reducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // initializing hook for load first time
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  // set sorting
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({type : "UPDATE_FILTERS_VALUE", payload : {name, value}});
  };

  // clear filters reset
  const clearFilters = () =>{
    dispatch({type : "CLEAR_FILTERS"});
  }

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  return (
    <FilterContext.Provider value={{ ...state, sorting,updateFilterValue,clearFilters  }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
