import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Header = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="h-[600px] w-full"
            src="https://i.ibb.co/282wY31/img1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[600px] w-full"
            src="https://i.ibb.co/QJmv43C/img3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[600px] w-full"
            src="https://i.ibb.co/0D95gtM/img4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[600px] w-full"
            src="https://i.ibb.co/KwLv3dx/img2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50">
        <h1 className="text-7xl text-white font-bodoni text-center">
          Top Real Estate <br />
          Listings in Dhaka
        </h1>
      </div>
    </div>
  );
};

export default Header;
