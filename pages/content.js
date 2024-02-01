import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Content from "@/components/Content";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Content</title>
      </Head>
      <Layout>
        <div className="hidden md:flex">
          <Header />
        </div>
        <Content />
      </Layout>
    </>
  );
}
