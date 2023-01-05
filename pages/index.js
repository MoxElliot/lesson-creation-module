import util from '../styles/util.module.scss';
import NavBar from '../components/nav-bar';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
            <title>Home Page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <NavBar />
    <h1>Hello</h1>
    </div>
  )
}
