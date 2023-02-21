import Document, { Head, Html, Main, NextScript } from "next/document";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NT9K2LC');`,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-JSRBBL62HV"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JSRBBL62HV');`,
            }}
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NT9K2LC"
              height="0"
              width="0"
              style={{
                display: "none",
                visibility: "hidden",
              }}
            />`,
            }}
          ></noscript>
          <Main />
          <NextScript />
          <div id="fb-root" />
          <div id="fb-customer-chat" className="fb-customerchat" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
