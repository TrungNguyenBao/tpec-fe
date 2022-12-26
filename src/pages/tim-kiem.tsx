import NextImage from "@/components/BaseComponents/NextImage";
import { serviceAPI } from "@/services/serviceAPI";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IArticle } from "../models";
import { getMediaFormat } from "../utils";

const Search = ({ data }: any) => {
  const [loading, setLoading] = useState(false);
  const [listA, setListA] = useState<IArticle[]>(data?.data);
  const [pagination, setPagination] = useState(data?.meta?.pagination);

  useEffect(() => {
    setListA(data?.data);
    setPagination(data?.meta?.pagination);
  }, [data]);

  const loadMore = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await serviceAPI?.getArticleByCate({
      page: pagination?.page + 1,
      pageSize: pagination?.pageSize,
      cate: "hand-book",
    });
    setLoading(false);
    setListA([...listA, ...res?.data]);
    setPagination(res?.meta?.pagination);
  };

  return (
    <div className="bg-colorcs-fff">
      <section className="container relative mx-auto mb-4 px-3 text-justify">
        <div className="flex items-center border-b-[1px] border-colorcs-D6D py-4">
          <Link href="/">
            <a className="text-[16px] text-colorcs-f00 hover:text-colorcs-E0C">
              Trang chủ
            </a>
          </Link>
          <MdOutlineDoubleArrow className="mx-2 text-xs text-colorcs-f99" />
          <span className="text-[16px] text-colorcs-f00">Tìm kiếm</span>
        </div>

        {listA?.length > 0 ? (
          <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {listA?.map((item: any) => (
              <article
                key={"product-h-" + item?.id}
                className="group hover:shadow-2xl duration-300 relative rounded-t-xl h-full w-full border-[1px] border-colorcs-bd1 bg-colorcs-fff"
              >
                <figure className="relative pt-[76%]">
                  <Link href={`/${item?.attributes?.slug}-${item?.id}.html`}>
                    <a
                      title={`/${item?.attributes?.slug}-${item?.id}.html`}
                      className=" overflow-hidden rounded-t-[10px] inline-block absolute inset-0"
                    >
                      {item?.attributes?.thumbImage?.data && (
                        <NextImage
                          src={getMediaFormat(item?.attributes?.thumbImage)}
                          alt={`/${item?.attributes?.slug}-${item?.id}.html`}
                          layout="fill"
                        />
                      )}
                    </a>
                  </Link>
                </figure>
                <header className="md:py-5 md:px-7 sx:p-3 text-center">
                  <Link href={`/${item?.attributes?.slug}-${item?.id}.html`}>
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
                    <Link href={`/${item?.attributes?.slug}-${item?.id}.html`}>
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
        ) : (
          <p className="text-center mt-20 mb-16 text-2xl">
            Không tìm thấy nội dung
          </p>
        )}
        {pagination?.page < pagination?.pageCount && (
          <div className="flex justify-center">
            <button
              className="px-7 py-2 rounded-xl border font-semibold text-colorcs-fff uppercase bg-colorcs-E0C scale-95 hover:scale-105 duration-300"
              onClick={loadMore}
            >
              Xem thêm
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { keyword = "" } = ctx?.query;
  try {
    const res = await serviceAPI.getArticleSearch({
      page: 1,
      pageSize: 12,
      keyword: keyword + "",
    });
    return {
      props: {
        data: res,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

export default Search;
