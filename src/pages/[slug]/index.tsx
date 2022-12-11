import { IArticle } from "@/models/index";
import { serviceAPI } from "@/services/serviceAPI";
import { slugToId } from "@/utils/index";
import { GetServerSideProps } from "next";
import { MdOutlineDoubleArrow } from "react-icons/md";

const ArticelDetail = ({ data }: { data: IArticle }) => {
  return (
    <div className="bg-colorcs-fff">
      <section className="container relative mx-auto mb-4 px-3 text-justify">
        <div className="flex items-center border-b-[1px] border-colorcs-D6D py-4">
          <a
            href="#"
            className="text-[16px] text-colorcs-f00 hover:text-colorcs-E0C"
          >
            Trang chủ
          </a>
          <MdOutlineDoubleArrow className="mx-2 text-xs text-colorcs-f99" />
          <a
            href="#"
            className="text-[16px] text-colorcs-f00 hover:text-colorcs-E0C"
          >
            Về TPEC Việt Nam
          </a>
        </div>
        <header className="mt-6">
          <h2 className="relative  py-3 text-[26px] font-medium leading-8 text-colorcs-E0C">
            {data?.attributes?.title}
          </h2>
        </header>
        <div
          className="ck-content custom custom-list"
          dangerouslySetInnerHTML={{ __html: data?.attributes?.content + "" }}
        />
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = slugToId(ctx.query.slug + "");
    const res = await serviceAPI?.getArticleById(+id);
    return {
      props: {
        data: res?.data,
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

export default ArticelDetail;
