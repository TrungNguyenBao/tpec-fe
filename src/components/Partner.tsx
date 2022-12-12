import { serviceAPI } from "@/services/serviceAPI";
import { useEffect, useState } from "react";
import { Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IPartner } from "../models";
import { getMediaFormat } from "../utils";

const Parter = () => {
  const [listP, setListP] = useState<IPartner[]>([]);
  useEffect(() => {
    serviceAPI.getPartner().then((res) => {
      setListP(res?.data);
    });
  }, []);

  return (
    <div className="bg-colorcs-fff">
      <section className="container relative mx-auto md:py-[30px] sx:py-5 px-4">
        <Swiper
          modules={[Controller, Pagination]}
          observer
          observeParents
          slideToClickedSlide={true}
          spaceBetween={15}
          className="mt-5"
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 2,
            },
            640: {
              width: 640,
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {listP?.map((item) => (
            <SwiperSlide key={"pn-" + item?.id}>
              <figure className="px-2 border border-gray-500">
                <img
                  src={getMediaFormat(item?.attributes?.image)}
                  alt="Fujitech elevator"
                  className="inline-block w-full h-full max-h-16 object-contain"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
export default Parter;
