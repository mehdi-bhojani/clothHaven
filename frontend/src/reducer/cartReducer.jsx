const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
  
      let cartProduct;
  
      cartProduct = {
        id: id,
        name: product.ProductName,
        color,
        amount,
        image: product.ProductImage,
        price: product.ProductPrice,
        max: product.ProductStock,
      };
      
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }

    // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

    return state;
  };
  
  export default cartReducer;