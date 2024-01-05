import React from "react";
import GridItem from "./GridItem";
import FormatPrice from "../../helper/FormatPrice";
import { useFilterContext } from "../../../context/filterContext";


function GridView() {
    const {filter_products} = useFilterContext();
    const handleAddToCart = (productId) => {};
  const handleAddToWishlist = (productId) => {};
  const handleQuickView = (productId) => {};
  return (
    <>
      <div className="tab_content">
        <div id="product_grid" className="tab_pane active show">
          <div className="product__section--inner product__grid--inner">
            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
            {filter_products.map((currElem) => (
              <>
              <GridItem
                productId={currElem.ProductID}
                imageUrl={currElem.ProductImage}
                title={currElem.ProductName}
                subtitle={currElem.Subtitle}
                currentPrice={FormatPrice({price : currElem.ProductPrice})}
                oldPrice={FormatPrice({price : currElem.ProductOldPrice})}
                rating={currElem.ProductRating} // Example rating value
                description={currElem.ProductShortDesc}
                badge={currElem.BadgeText}
                addToCartHandler={() => handleAddToCart(currElem.productID)}
                addToWishlistHandler={() => handleAddToWishlist(currElem.productID)}
                quickViewHandler={() => handleQuickView(currElem.productID)}
              />
              </>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridView;
