import React, { createContext, useContext, useState } from 'react';
import { getAllLocalStorageArray } from '../../functions';

// creating context
const WishListContext = createContext();

// provider
function MyProvider({ children }) {
  const [wishListData, setWishListData] = useState(getAllLocalStorageArray());
  return (
    <WishListContext.Provider value={{ wishListData, setWishListData }}>
      {children}
    </WishListContext.Provider>
  );
}

// consumer
function useWishListContext() {
  const context = useContext(WishListContext);

  // error handling
  if (context === undefined) {
    throw new Error('WishListContext must be used within a MyProvider');
  }
  return context;
}

export { MyProvider, useWishListContext };
