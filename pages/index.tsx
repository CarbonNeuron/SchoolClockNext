import Head from "next/head";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="h-screen bg-gray-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activePage={"hs"}/>
    </div>
  );
}
