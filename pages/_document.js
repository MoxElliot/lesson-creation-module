import Document, { Html, Head, Main, NextScript } from 'next/document'


//this file is to import the stylesheet. in next.js adding the link/stylesheet in to the head of the index could potentially break when used with Suspense or streaming.

export default class CustomDocument extends Document {
  render() {
    return <Html>
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.21.1/dist/bootstrap-table.min.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
  }
}