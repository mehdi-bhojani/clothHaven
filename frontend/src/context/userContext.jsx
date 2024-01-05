import { createContext, useReducer, useContext, useEffect } from 'react';
import userReducer from '../reducer/userReducer';
import axios from 'axios';

const UserContext = createContext();

const initialState = {
    UserID: "",
    UserEmail: "",
    UserPassword: "",
    UserFirstName: "",
    UserLastName: "",
    UserCity: "",
    UserState: "",
    UserZip: "",
    UserRegistrationDate: "",
    UserPhone: "",
    UserCountry: "",
    UserAddress: "",
    order: [],
};


export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const userLogin = () => {
    
  }

  const getUserData = async (email) => {
    const url = "http://localhost:5000/users/getUser?userEmail=";
    console.log("getUserData called for : " + email);

    try {
      const response = await fetch(url + email);

      if (response.ok) {
        const data = await response.text();

        // Check if the data is not empty before parsing
        if (data.trim() !== "") {
          const userData = JSON.parse(data);
          console.log(userData);
          dispatch({ type: "user_login", payload: userData });
        } else {
          console.error("Empty JSON data received");
        }
      } else {
        console.error("Error retrieving user data:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
};

const fetchOrders = async () => {
    try {
      const response = await fetch(`http://localhost:5000/orders/${state.UserID}`);

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'set_orders', payload: data.orders });
      } else {
        console.error('Error fetching orders:', response.status);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    if (state.UserID) {
      fetchOrders();
    }
  }, [state]);



  return (
    <UserContext.Provider value={{ state, dispatch, getUserData }}>
      {children}
    </UserContext.Provider>
  );
};



    export const useUser = () => {
        return useContext(UserContext);
    };
    

