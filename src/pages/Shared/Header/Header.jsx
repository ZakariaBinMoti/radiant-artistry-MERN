import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Typewriter } from "react-simple-typewriter";
const Header = () => {
  return (
    <div className="relative lg:mx-0 mx-2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="lg:h-[600px] w-full"
            src="https://images.unsplash.com/photo-1516783154360-123b392d0833?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-[600px] w-full"
            src="https://images.unsplash.com/photo-1607346705566-b2b5048ae44a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <img
            className="lg:h-[600px] w-full"
            src="https://as1.ftcdn.net/v2/jpg/03/44/54/32/1000_F_344543270_s78HxCaCn8Cl0i01e2fKb1eek0bE8NHr.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-[600px] w-full"
            src="https://as2.ftcdn.net/v2/jpg/01/71/57/97/1000_F_171579717_LR0bahuI0wuQlDtEKZ5dgHjXQKoKUldg.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50">
      <h1 className="lg:text-7xl md:text-4xl text-2xl text-white font-bodoni text-center" style={{ margin: 'auto 0', fontWeight: 'normal' }}>
      Artistry in{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter
            words={['Paper', 'Crafts', '& Glass']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      </div>
    </div>
  );
};

export default Header;
