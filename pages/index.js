import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="description"></meta>
      </Head>
      <Layout>Please use navbar to go to content page</Layout>;
    </>
  );
}
