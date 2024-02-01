import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Content from "@/components/Content";

export default function HomePage() {
  return (
    <Layout>
      <div className="hidden md:flex">
        <Header />
      </div>
      <Content />
    </Layout>
  );
}
