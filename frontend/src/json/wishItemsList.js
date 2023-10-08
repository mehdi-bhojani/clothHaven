import React, { useState, useEffect } from 'react';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Load wishlist data from local storage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);
    setWishlistCount(storedWishlist.length);
  }, []);

  // Add an item to the wishlist
  const addToWishlist = (product) => {
    const updatedWishlist = [...wishlistItems, product];
    setWishlistItems(updatedWishlist);
    setWishlistCount(updatedWishlist.length);

    // Save wishlist data to local storage
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Remove an item from the wishlist
  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== product.id);
    setWishlistItems(updatedWishlist);
    setWishlistCount(updatedWishlist.length);

    // Save updated wishlist data to local storage
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <h2>Wishlist ({wishlistCount})</h2>
      {wishlistItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeFromWishlist(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
