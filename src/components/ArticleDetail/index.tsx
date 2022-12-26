import NextImage from "@/components/BaseComponents/NextImage";
import { IArticle } from "@/models/index";
import { editContentHandle, getMediaFormat } from "@/utils/index";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

const ArticleDetail = ({ data }: { data: IArticle }) => {
  const listA: IArticle[] = data?.attributes?.listArticle?.data || [];
  const isList = listA?.length > 0;
  return (
    <>
      {isList ? (
        <div className="bg-colorcs-fff">
          <section className="container relative mx-auto mb-4 px-3 text-justify">
            <div className="flex items-center border-b-[1px] border-colorcs-D6D py-4">
              <Link href="/">
                <a className="text-[16px] text-colorcs-f00 hover:text-colorcs-E0C">
                  Trang chủ
                </a>
              </Link>
              <MdOutlineDoubleArrow className="mx-2 text-xs text-colorcs-f99" />
              <span className="text-[16px] text-colorcs-f00">
                {data?.attributes?.title}
              </span>
            </div>
            <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {listA?.map((item) => (
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
                      <Link
                        href={`/${item?.attributes?.slug}-${item?.id}.html`}
                      >
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
      ) : (
        <div className="bg-colorcs-fff">
          <section className="container relative mx-auto mb-4 px-3 text-justify">
            <div className="flex items-center border-b-[1px] border-colorcs-D6D py-4">
              <Link href="/">
                <a className="text-[16px] text-colorcs-f00 hover:text-colorcs-E0C">
                  Trang chủ
                </a>
              </Link>
              <MdOutlineDoubleArrow className="mx-2 text-xs text-colorcs-f99" />
              <span className="text-[16px] text-colorcs-f00">
                {data?.attributes?.title}
              </span>
            </div>
            <header className="mt-6">
              <h2 className="relative  py-3 text-[26px] font-medium leading-8 text-colorcs-E0C">
                {data?.attributes?.title}
              </h2>
            </header>
            <div
              className="ck-content custom custom-list"
              dangerouslySetInnerHTML={{
                __html: editContentHandle(data?.attributes?.content + ""),
              }}
            />
          </section>
        </div>
      )}
    </>
  );
};

export default ArticleDetail;
