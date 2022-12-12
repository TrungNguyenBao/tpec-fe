import Advise from "@/components/Advise";
import IntroDuce from "@/components/IntroDuce";
import Product from "@/components/ProDuct";
import Service from "@/components/Service";
import Partner from "@/components/Partner";
import WorkingMotto from "@/components/WorkingMotto";
import { serviceAPI } from "@/services/serviceAPI";
import { GetServerSideProps } from "next";
import { IAboutUs, IHComponent, IImageProps } from "../models";
import Banner from "@/components/Banner";

export type HomePageProps = {
  homeData: {
    attributes: {
      aboutUs: IAboutUs;
      banner: Array<{
        id: number;
        image: IImageProps;
      }>;
      products: IHComponent;
      services: IHComponent[];
      article: IHComponent;
    };
  };
};

const Home = ({ homeData }: HomePageProps) => {
  return (
    <>
      <Banner data={homeData?.attributes?.banner} />
      <Product data={homeData?.attributes?.products} />
      <Service data={homeData?.attributes?.services} />
      <IntroDuce data={homeData?.attributes?.article} />
      <WorkingMotto data={homeData?.attributes?.aboutUs} />
      <Advise />
      <Partner />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await serviceAPI.getHomeData();
    return {
      props: {
        homeData: res?.data,
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

export default Home;
