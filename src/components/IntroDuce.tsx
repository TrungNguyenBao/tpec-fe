import Link from "next/link";
import { IHComponent } from "../models";
import { getMediaFormat } from "../utils";
import NextImage from "./BaseComponents/NextImage";

const IntroDuce = ({ data }: { data: IHComponent }) => {
  const listA = data?.articles?.data;
  return (
    <>
      {data && (
        <div className="bg-colorcs-F9F">
          <section className="container relative mx-auto md:py-[30px] sx:py-5 px-3">
            <header className="text-center">
              <p className="text-xs font-bold pb-1 uppercase text-colorcs-E0C">
                {data?.name}
              </p>
              <h2 className="afProd relative pb-4 text-[28px] font-bold leading-8 text-colorcs-f33">
                {data?.title}
              </h2>
              <p className="mt-4 text-[17px] leading-6 text-colorcs-f33">
                {data?.description}
              </p>
            </header>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              {listA?.[0] && (
                <article className="">
                  <div className="group relative h-full w-full duration-200">
                    <figure className="relative pt-[66%]">
                      <Link
                        href={`/${listA?.[0]?.attributes?.slug}-${listA?.[0]?.id}`}
                      >
                        <a>
                          {listA?.[0]?.attributes?.thumbImage?.data && (
                            <NextImage
                              src={getMediaFormat(
                                listA?.[0]?.attributes?.thumbImage
                              )}
                              alt={listA?.[0]?.attributes?.slug}
                              layout="fill"
                              objectFit="cover"
                            />
                          )}
                        </a>
                      </Link>
                    </figure>
                    <header className="py-3">
                      <Link
                        href={`/${listA?.[0]?.attributes?.slug}-${listA?.[0]?.id}`}
                      >
                        <a>
                          <h3 className="pb-1 text-xl font-bold leading-[28px] text-colorcs-f33 duration-200 group-hover:text-colorcs-E0C">
                            {listA?.[0]?.attributes?.title}
                          </h3>
                        </a>
                      </Link>
                      <p className="text-[16px] leading-6 text-colorcs-E31 line-clamp-3">
                        {listA?.[0]?.attributes?.description}
                      </p>
                    </header>
                  </div>
                </article>
              )}
              <article className="flex flex-col">
                {listA?.slice(1, 4)?.map((item) => (
                  <div
                    className="group flex flex-nowrap mb-4 last:mb-0"
                    key={"art-lv2" + item?.id}
                  >
                    <figure className="pr-[30%] pt-[19%] relative">
                      <Link href={`/${item?.attributes?.slug}-${item?.id}`}>
                        <a>
                          <NextImage
                            src="/images/kich-thuoc-thang-may-gia-dinh.jpg"
                            alt={item?.attributes?.slug}
                            layout="fill"
                          />
                        </a>
                      </Link>
                    </figure>
                    <div className="pl-4 w-full">
                      <header>
                        <Link href={`/${item?.attributes?.slug}-${item?.id}`}>
                          <a>
                            <h3 className="text-lg leading-6 duration-200 group-hover:text-colorcs-E0C font-semibold pb-1 line-clamp-2">
                              {item?.attributes?.title}
                            </h3>
                          </a>
                        </Link>
                        <p className="text-[16px] leading-6 line-clamp-2">
                          {item?.attributes?.description}
                        </p>
                      </header>
                    </div>
                  </div>
                ))}
              </article>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
export default IntroDuce;
