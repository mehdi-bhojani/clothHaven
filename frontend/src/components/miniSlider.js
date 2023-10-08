import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import newProducts from '../json/newProducts';
import { SingleSlideProduct } from './singleSlideProduct';
import { addToLocalStorageArray,getFromLocalStorageArray } from '../functions';
import { useWishListContext } from './contexts/wishListContext';


function MiniSlider() {

  const { setWishListData} = useWishListContext();

  return (

    <div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={4}


        speed={1000}
        navigation


        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >


        {newProducts.map((elem) => (
          <SwiperSlide>
            <div className="swiper-slide">
              <SingleSlideProduct
                productDetailsLink={elem.productDetailsLink}
                primaryImage={elem.primaryImage}
                secondaryImage={elem.secondaryImage}
                badgeText={elem.badgeText}
                subtitle={elem.subtitle}
                title={elem.title}
                currentPrice={elem.currentPrice}
                oldPrice={elem.oldPrice}
                rating={elem.rating}
                addToCartLink={elem.addToCartLink}
                wishlistLink={elem.wishlistLink}
                quickViewLink={elem.quickViewLink}
                onAddToWishlist={()=>addToLocalStorageArray(elem,setWishListData)}
              />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>

  );
}

export default MiniSlider;
