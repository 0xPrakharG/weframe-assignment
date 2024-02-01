import stories from "@/pages/api/stories.json";
import Image from "next/image";
import Eye from "@/public/eye.svg";
import Status from "@/public/status-up.svg";
import Dots from "@/public/dots.svg";
import Link from "next/link";

export default function Stories() {
  return (
    <div className="flex gap-3 overflow-x-scroll h-auto">
      {stories.map((story) => (
        <div key={story.id} className="min-w-72">
          <div className="sticky">
            <Image
              src={story.image}
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="absolute top-2 right-3">
              <div className="flex gap-1 right-1 justify-end items-center">
                <Link
                  href={"/"}
                  aria-label="views"
                  className="flex items-center gap-1 rounded-md bg-white opacity-80 p-1"
                >
                  <Image
                    src={Eye}
                    alt=""
                    width={100}
                    height={100}
                    className="w-5"
                  />
                  <p>{story.views}</p>
                </Link>
                <Link
                  href={"/"}
                  aria-label="status"
                  className="bg-white rounded-md opacity-80 p-1"
                >
                  <Image
                    src={Status}
                    alt=""
                    width={100}
                    height={100}
                    className="w-5"
                  />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 text-white p-2">
              <p className="text-xl">{story.title}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                  <p className="uppercase font-black">{story.type}</p>
                  <span className="text-[28px] text-[#D9D9D9]">&bull;</span>
                  <p className="text-base font-semibold text-[#A0A3BD]">
                    {story.date}
                  </p>
                </div>
                <p
                  className={`px-3 py-1 rounded-md text-base font-semibold ${
                    story.status === "Published" &&
                    "text-[#0DAD82] bg-[#E4FFF8]"
                  } ${
                    story.status === "Created" && "text-[#58A4FF] bg-[#DAF1FB]"
                  } ${
                    story.status === "Draft" && "text-[#A0A3BD] bg-[#F4F4F4]"
                  }`}
                >
                  {story.status}
                </p>
              </div>
              <div className="flex items-center mt-1 gap-2">
                <Link
                  href={"/content/story/id"}
                  aria-label="view"
                  className="w-full py-2 flex justify-center bg-[#E8E9FF] rounded-md font-semibold text-[#7750F1]"
                >
                  View
                </Link>
                <Link
                  href={"/"}
                  aria-label="dots"
                  className="px-4 bg-[#FAFAFA] py-4 h-full rounded-md"
                >
                  <Image
                    src={Dots}
                    alt=""
                    width={100}
                    height={100}
                    className="w-6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
