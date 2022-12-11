import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Banner = () => (
  <div className="w-full relative">
    <button className="swiper-button-prev-1 absolute top-1/2 left-3 -translate-y-1/2 z-[2] scale-95 hover:scale-110 duration-300 ">
      <FiChevronLeft
        className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
        color="#ffff"
      />
    </button>
    <button className="swiper-button-next-1 scale-95 hover:scale-110 duration-300 absolute top-1/2 right-3 -translate-y-1/2 z-[2]">
      <FiChevronRight
        className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
        color="#ffff"
      />
    </button>

    <Swiper
      modules={[Navigation, Controller]}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
      }}
      centeredSlides
      observer
      observeParents
      slideToClickedSlide={true}
      loop
    >
      <SwiperSlide>
        <figure>
          <img
            src="/images/thang-may-tpec-viet-nam-banner.jpg"
            alt="image"
            className="object-contain"
          />
        </figure>
      </SwiperSlide>
    </Swiper>
  </div>
);
export default Banner;
