import Layout from "@/components/Layout";
import StoryHeader from "@/components/StoryHeader";
import StoryContent from "@/components/StoryContent";

export default function StoryPage() {
  return (
    <Layout>
      <div className="bg-white">
        <StoryHeader />
        <div>
          <StoryContent />
        </div>
      </div>
    </Layout>
  );
}
