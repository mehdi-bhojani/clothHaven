import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "http://localhost:5000/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  productOptions: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data; // No need for "await" here
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data; // No need for "await" here
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct[0] });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  const getProductOptions = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const productOptions = res.data; // No need for "await" here
      dispatch({ type: "SET_PRODUCT_OTIONS", payload: productOptions });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    getProducts(API, { cancelToken: source.token });
    getProductOptions(API+"/ProductOptions");
    return () => {
      // Cleanup on component unmount
      source.cancel();
    };
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext};
