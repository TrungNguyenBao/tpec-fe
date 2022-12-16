import Link from "next/link";
import { Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IHComponent } from "../models";
import { getMediaFormat } from "../utils";
import NextImage from "./BaseComponents/NextImage";

const Service = ({ data }: { data: IHComponent[] }) => {
  return (
    <div className="bg-colorcs-fff">
      {data?.map((item, index) => (
        <section
          className="container relative mx-auto md:py-[30px] sx:py-5 px-3"
          key={"sercice-h-" + index + "-" + item?.id}
        >
          <header className={`text-${item?.textPosition}`}>
            {item?.name && (
              <p className="text-xs font-bold pb-1 uppercase text-colorcs-E0C">
                {item?.name}
              </p>
            )}
            <h2
              className={`relative pb-4 text-[28px] font-bold leading-8 text-colorcs-f33 ${
                item?.textPosition === "center" ? `afProd` : `afDevi`
              }`}
            >
              {item?.title}
            </h2>
            <p
              className={`mt-4 text-[17px] leading-6 text-[#333333] ${
                item?.textPosition !== "center" ? `max-w-[760px]` : ``
              }`}
            >
              {item?.description}
            </p>
          </header>
          <Swiper
            modules={[Controller, Pagination]}
            slidesPerView={3}
            centeredSlides
            observer
            observeParents
            loop
            spaceBetween={15}
            className="mt-5"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {item?.articles?.data?.slice(0, 3)?.map((art) => (
              <SwiperSlide key={"sv-ar" + art?.id}>
                <article className=" border-[1px] border-colorcs-E0E group relativ h-full w-full shadow-5xl bg-colorcs-fff duration-200">
                  <figure className="relative pt-[76%]">
                    <Link href={`/${art?.attributes?.slug}-${art?.id}`}>
                      {art?.attributes?.thumbImage?.data && (
                        <a className=" overflow-hidden inline-block absolute inset-0">
                          <NextImage
                            src={getMediaFormat(art?.attributes?.thumbImage)}
                            alt={`${art?.attributes?.slug}`}
                            layout="fill"
                          />
                        </a>
                      )}
                    </Link>
                  </figure>
                  <header className="border-t-4 border-t-colorcs-E0C md:p-5 sx:p-3 text-center">
                    <h3 className=" text-lg font-bold lg:line-clamp-1 sx:line-clamp-2 sx:min-h-[48px] lg:min-h-[26px] leading-6 text-colorcs-f33 duration-200 group-hover:text-colorcs-E0C ">
                      <Link href={`/${art?.attributes?.slug}-${art?.id}`}>
                        <a>{art?.attributes?.title}</a>
                      </Link>
                    </h3>
                  </header>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </div>
  );
};
export default Service;
