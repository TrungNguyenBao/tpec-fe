import Document, { Head, Html, Main, NextScript } from "next/document";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html>
        <Head />
        <body>
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
