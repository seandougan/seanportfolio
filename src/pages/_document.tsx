import { Html, Head, Main, NextScript } from 'next/document'
import { AppProps } from 'next/app'

export default function Document(props: AppProps) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
