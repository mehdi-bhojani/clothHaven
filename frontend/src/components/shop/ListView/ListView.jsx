import React from "react";
import ListItem from "./ListItem";
import FormatPrice from "../../helper/FormatPrice";
import { useFilterContext } from "../../../context/filterContext";

function ListView() {
  const productId = 5;
  const {filter_products} = useFilterContext();
  const handleAddToCart = (productId) => {};
  const handleAddToWishlist = (productId) => {};
  const handleQuickView = (productId) => {};
  return (
    <>
      <div id="product_list">
        <div className="product__section--inner">
          <div className="row row-cols-1 mb--n30">
            {filter_products.map((currElem) => (
              <>
              <ListItem
                imageUrl={currElem.ProductImage}
                title={currElem.ProductName}
                subtitle={currElem.Subtitle}
                currentPrice={FormatPrice({price : currElem.ProductPrice})}
                oldPrice={FormatPrice({price : currElem.ProductOldPrice})}
                rating={currElem.ProductRating} // Example rating value
                description={currElem.ProductShortDesc}
                badge={currElem.BadgeText}
                addToCartHandler={() => handleAddToCart(productId)}
                addToWishlistHandler={() => handleAddToWishlist(productId)}
                quickViewHandler={() => handleQuickView(productId)}
              />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListView;
