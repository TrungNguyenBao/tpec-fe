import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IHComponent } from "../models";
import { getMediaFormat } from "../utils";
import NextImage from "./BaseComponents/NextImage";

const Product = ({ data }: { data: IHComponent }) => {
  return (
    <div className="bg-colorcs-F9F">
      <section className="container relative mx-auto md:py-[30px] sx:py-5 px-3">
        <header className="text-center">
          <p className="text-xs font-bold pb-1 text-colorcs-E0C">
            {data?.name}
          </p>
          <h2
            className={`afProd text-center relative pb-4 text-[28px] font-bold leading-8 text-colorcs-f33`}
          >
            {data?.title}
          </h2>
          <p className="mt-4 text-[17px] leading-6 text-colorcs-f33">
            {data?.description}
          </p>
        </header>
        <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {data?.articles?.data &&
            data?.articles?.data?.slice(0, 6).map((item) => (
              <article
                key={"product-h-" + item?.id}
                className="group hover:shadow-2xl duration-300 relative rounded-t-xl h-full w-full border-[1px] border-colorcs-bd1 bg-colorcs-fff"
              >
                <figure className="relative pt-[76%]">
                  <Link href={`/${item?.attributes?.slug}-${item?.id}`}>
                    <a
                      title={`/${item?.attributes?.slug}-${item?.id}`}
                      className=" overflow-hidden rounded-t-[10px] inline-block absolute inset-0"
                    >
                      {item?.attributes?.thumbImage?.data && (
                        <NextImage
                          src={getMediaFormat(item?.attributes?.thumbImage)}
                          alt={`/${item?.attributes?.slug}-${item?.id}`}
                          layout="fill"
                        />
                      )}
                    </a>
                  </Link>
                </figure>
                <header className="md:py-5 md:px-7 sx:p-3 text-center">
                  <Link href={`/${item?.attributes?.slug}-${item?.id}`}>
                    <a>
                      <h3 className="py-2 group-hover:text-colorcs-E0C duration-200 text-base font-bold uppercase leading-6 text-colorcs-f33 ">
                        {item?.attributes?.title}
                      </h3>
                    </a>
                  </Link>
                  <p className="text-[14px] leading-5 text-colorcs-E31 line-clamp-3">
                    {item?.attributes?.description}
                  </p>

                  <div className="mt-2">
                    <Link href={`/${item?.attributes?.slug}-${item?.id}`}>
                      <a className="flex cursor-pointer items-center justify-end text-xs font-bold leading-5 text-colorcs-f00 duration-300 group-hover:text-colorcs-E0C">
                        XEM CHI TIẾT
                        <FaLongArrowAltRight className="ml-2 text-base" />
                      </a>
                    </Link>
                  </div>
                </header>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
};
export default Product;
