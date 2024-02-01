import Layout from "@/components/Layout";
import StoryHeader from "@/components/StoryHeader";
import StoryContent from "@/components/StoryContent";
import Head from "next/head";

export default function StoryPage() {
  return (
    <>
      <Head>
        <title>Story</title>
      </Head>
      <Layout>
        <div className="bg-white">
          <StoryHeader />
          <div>
            <StoryContent />
          </div>
        </div>
      </Layout>
    </>
  );
}
