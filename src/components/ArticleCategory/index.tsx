import NextImage from "@/components/BaseComponents/NextImage";
import { IArticle } from "@/models/index";
import { serviceAPI } from "@/services/serviceAPI";
import { dateFormat, getMediaFormat } from "@/utils/index";
import { useGlobalContext } from "Context/GlobalProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import { MdOutlineDoubleArrow } from "react-icons/md";

export type ArticleCategoryProps = {
  data: {
    data: IArticle[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
      };
    };
  };
};

const ArticleCategory = ({ data }: ArticleCategoryProps) => {
  const [loading, setLoading] = useState(false);
  const [listA, setListA] = useState<IArticle[]>(data?.data);
  const [pagination, setPagination] = useState(data?.meta?.pagination);
  const { categories } = useGlobalContext();
  const router = useRouter();
  const cate = categories?.find(
    (item: any) => item?.attributes?.slug === router?.query?.slug
  );

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
          <Link href={`/${cate?.attributes?.slug}`}>
            <a className="text-[16px] text-colorcs-f00 hover:text-colorcs-E0C">
              {cate?.attributes?.name}
            </a>
          </Link>
        </div>
        <header className="mt-6">
          <h2 className="relative  py-3 text-[26px] font-medium leading-8 text-colorcs-E0C">
            {cate?.attributes?.name}
          </h2>
        </header>
        <div className="py-2">
          {listA?.length > 0 ? (
            listA?.map((item) => (
              <article
                className="group mb-5 md:flex sx:block flex-nowrap border-[1px] border-colorcs-D6D"
                key={"hb-" + item?.id}
              >
                <figure className="lg:pr-[33%] sx:pr-[36%] md:pt-[20%] sx:pt-[60%] relative">
                  <Link href={`/${item?.attributes?.slug}-${item?.id}.html`}>
                    <a>
                      {item?.attributes?.thumbImage?.data && (
                        <NextImage
                          src={getMediaFormat(item?.attributes?.thumbImage)}
                          alt={item?.attributes?.slug}
                          className="sx:m-auto lg:m-0"
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                    </a>
                  </Link>
                </figure>
                <div className="md:px-7 md:py-5 sx:w-full sx:p-3">
                  <header>
                    <Link href={`/${item?.attributes?.slug}-${item?.id}.html`}>
                      <a>
                        <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-E0C line-clamp-2">
                          {item?.attributes?.title}
                        </h3>
                      </a>
                    </Link>
                    <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-colorcs-f66">
                      Ngày {dateFormat(item?.attributes?.publishedAt)}
                    </span>
                    <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33 line-clamp-3">
                      {item?.attributes?.description}
                    </p>
                  </header>
                  <Link href={`/${item?.attributes?.slug}-${item?.id}.html`}>
                    <a className="md:mt-[41px] sx:mt-4 inline-flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-200 hover:text-colorcs-E0C">
                      Xem chi tiết
                      <ImArrowRight className="ml-[10px] text-xs duration-200" />
                    </a>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center mt-20 mb-16 text-2xl">Chưa có nội dung</p>
          )}
        </div>
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
        {/* <h1>test</h1> */}
      </section>
    </div>
  );
};

export default ArticleCategory;
