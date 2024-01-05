import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {React,props} from "react";

SwiperCore.use([Autoplay]);
// Import Swiper styles

function ProductImageSlider(props) {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true} // Enable loop
        speed={1500}
        navigation
      >
        {props.images.map((item, index) => {
            return(
          <SwiperSlide>
            <img className="w-100 fill-available" key={index} src={item} />
          </SwiperSlide>)
        })}
      </Swiper>
    </div>
  );
}

export default ProductImageSlider;
