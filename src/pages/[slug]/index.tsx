import ArticleCategory from "@/components/ArticleCategory";
import ArticleDetail from "@/components/ArticleDetail";
import { serviceAPI } from "@/services/serviceAPI";
import { slugToId } from "@/utils/index";
import { GetServerSideProps } from "next";

const SlugPage = ({ data, isArticle }: { data: any; isArticle: boolean }) => {
  return (
    <>
      {isArticle ? (
        <ArticleDetail data={data} />
      ) : (
        <ArticleCategory data={data} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const slug = ctx.query.slug + "";
    if (slug.endsWith(`.html`)) {
      const id = slugToId(slug.split(".ht")?.[0]);
      const res = await serviceAPI?.getArticleById(+id);
      return {
        props: {
          data: res?.data,
          isArticle: true,
        },
      };
    }
    const res = await serviceAPI?.getArticleByCate({
      page: 1,
      pageSize: 12,
      cate: slug,
    });
    return {
      props: {
        data: res,
        isArticle: false,
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

export default SlugPage;
