import Image from "next/image";
import StoryBg from "@/public/story-bg.png";
import StoryCarousel from "./StoryCarousel";
import subStories from "@/pages/api/subStories.json";

export default function StoryImage() {
  return (
    <div className="">
      <div className="relative h-fit">
        <Image
          src={StoryBg}
          alt=""
          width={100}
          height={100}
          className="hidden md:flex w-full"
        />
        <div className="absolute md:top-[50%] md:-translate-y-[50%] left-[50%] -translate-x-[50%]">
          <StoryCarousel>
            {subStories.map((story) => (
              <div key={story.id} className="">
                <Image
                  src={story.imageSrc}
                  alt=""
                  width={100}
                  height={100}
                  className="px-16"
                />
                <div className="absolute bottom-5 text-white left-20 md:text-xl text-lg lg:text-3xl md:w-[250px] lg:w-[360px] flex flex-col">
                  <p className="text-left">{story.info}</p>
                  <p className="text-left text-xl py-3 px-5 bg-[#F7EEFF] w-fit rounded-md mt-3 text-[#9058FF]">
                    {story.type}
                  </p>
                </div>
              </div>
            ))}
          </StoryCarousel>
        </div>
      </div>
    </div>
  );
}
