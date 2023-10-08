import React from "react";


export const addToLocalStorageArray = (newObject, setWishListData) => {
  // Retrieve the existing array from localStorage or create an empty array
  const existingArray = JSON.parse(localStorage.getItem('myArray')) || [];

  // Push the new object into the array
  existingArray.push(newObject);

  // Save the updated array back into localStorage
  localStorage.setItem('myArray', JSON.stringify(existingArray));

  setWishListData(existingArray);
};

export const removeFromLocalStorageArray = (productId,setWishListData) => {
  let storedArray = JSON.parse(localStorage.getItem('myArray')) || [];
  const indexToRemove = storedArray.findIndex((object) => object.productId === productId);
  if (indexToRemove !== -1) {
    storedArray.splice(indexToRemove, 1);
    localStorage.setItem('myArray', JSON.stringify(storedArray));
    setWishListData(storedArray);
};
}

export const getAllLocalStorageArray = () => {
  // Retrieve the array from localStorage
  const storedArray = JSON.parse(localStorage.getItem('myArray')) || [];

  if (storedArray.length > 1) {
    console.log('Stored Array:', storedArray);
    return storedArray;
  } else {
    console.log('Object not found');
    return [];
  }
};
