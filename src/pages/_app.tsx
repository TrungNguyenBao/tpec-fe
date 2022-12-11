import ErrorBoundary from "@/components/ErrorBoundary";
import AppLayout from "@/layouts/AppLayout";
import GlobalProvider from "Context/GlobalProvider";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/custom.css";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/ckeditor.css";

import App from "next/app";
import { serviceAPI } from "@/services/serviceAPI";
import { DefaultSeo } from "next-seo";
import { ISeoProps } from "../models";
import { getMediaFormat } from "../utils";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const defaultSeo: ISeoProps =
    pageProps?.globalData?.data?.attributes?.defaultSeo;
  const favicon = pageProps?.globalData?.data?.attributes?.favicon;
  const structuredData = JSON.stringify(defaultSeo?.structuredData);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {favicon && (
          <link rel="shortcut icon" href={getMediaFormat(favicon, "small")} />
        )}
        {structuredData && (
          <script type="application/ld+json">{structuredData}</script>
        )}
      </Head>
      <DefaultSeo
        defaultTitle={defaultSeo?.metaTitle}
        title={defaultSeo?.metaTitle}
        titleTemplate={defaultSeo?.titleTemplate}
        description={defaultSeo?.metaDescription}
        canonical={process.env.NEXT_PUBLIC_LINK_HOME_PAGE}
        robotsProps={{
          noarchive: true,
        }}
        openGraph={{
          site_name: defaultSeo?.metaTitle,
          title: defaultSeo?.metaTitle,
          description: defaultSeo?.metaDescription,
          url: process.env.NEXT_PUBLIC_LINK_HOME_PAGE,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_LINK_HOME_PAGE}/share.png`,
              width: 1000,
              height: 498,
              alt: pageProps?.globalData?.data?.attributes?.nameOfCompany,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: pageProps?.globalData?.data?.attributes?.nameOfCompany,
          },
        ]}
      />
      <GlobalProvider globalData={pageProps.globalData}>
        <ErrorBoundary>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ErrorBoundary>
      </GlobalProvider>
    </>
  );
};

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);
  const res = await serviceAPI.getGlobalData();
  return {
    ...appProps,
    pageProps: {
      globalData: res,
    },
  };
};

export default MyApp;