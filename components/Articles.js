import articles from "@/pages/api/articles.json";
import Image from "next/image";
import Dots from "@/public/dots.svg";
import Link from "next/link";

export default function Articles() {
  return (
    <div className="flex gap-3 overflow-x-scroll">
      {articles.map((article) => (
        <div
          key={article.id}
          className="flex flex-col bg-white h-fit rounded-[10px] md:min-w-96 min-w-80 p-3"
        >
          <Image
            src={article.image}
            alt=""
            width={100}
            height={100}
            className="w-full rounded-[10px]"
          />
          <div className="flex flex-col mt-3">
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-1">
                <h6 className="uppercase font-extrabold text-[#9058FF]">
                  {article.type}
                </h6>
                <span className="text-[28px] text-[#D9D9D9]">&bull;</span>
                <p className="text-[#A0A3BD] font-semibold">{article.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={article.dp}
                  alt=""
                  width={100}
                  height={100}
                  className="w-6 h-6"
                />
                <p className="font-semibold">{article.postedBy}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="md:text-[18px] text-[15px] font-semibold">
                {article.title}
              </p>
              <p
                className={`px-4 py-1 ${
                  article.status === "Created"
                    ? "text-[#7950F2] bg-[#E3D5FF]"
                    : "text-[#0DAD82] bg-[#E4FFF8]"
                } rounded-md font-semibold`}
              >
                {article.status}
              </p>
            </div>
            <p className="mt-3 md:text-base text-sm font-normal text-[#A0A3BD]">
              {article.text}
            </p>
            <div className="flex gap-2 mt-3">
              {article.tags.map((tag, index) => (
                <p
                  key={index}
                  className="px-4 py-1 rounded-md text-xs md:text-base bg-[#F8FAFB]"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Link
                href={"/"}
                className="flex justify-center w-full bg-[#E8E9FF] md:py-4 py-2 rounded-md font-semibold text-[#7750F1]"
              >
                View
              </Link>
              <Link
                href={"/"}
                aria-label="dots"
                className="flex justify-center px-5 md:py-6 py-[18px] bg-[#FAFAFA] rounded-md"
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
      ))}
    </div>
  );
}
