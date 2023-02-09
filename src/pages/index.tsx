import Background from '@/templates/background/background';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Dougan</title>
        <meta name="description" content="Sean Dougan's portfolio page. Sean Dougan is a software developer who is looking for work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background></Background>
    </>
  )
}
