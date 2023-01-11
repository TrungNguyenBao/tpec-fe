/* eslint-disable one-var */
/* eslint-disable no-var */
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
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const defaultSeo: ISeoProps =
    pageProps?.globalData?.data?.attributes?.defaultSeo;
  const favicon = pageProps?.globalData?.data?.attributes?.favicon;
  const structuredData = JSON.stringify(defaultSeo?.structuredData);

  useEffect(() => {
    const delay = setTimeout(() => {
      const el = document.createElement("script");
      el.src = "/js/fbjs.js";
      document.body.appendChild(el);
    }, 10);
    return () => clearTimeout(delay);
  }, []);

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
      <GlobalProvider
        globalData={pageProps.globalData}
        categories={pageProps?.categories}
      >
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
  const [res, res2] = await Promise.all([
    serviceAPI.getGlobalData(),
    serviceAPI?.getCategories(),
  ]);
  return {
    ...appProps,
    pageProps: {
      globalData: res,
      categories: res2?.data,
    },
  };
};

export default MyApp;
