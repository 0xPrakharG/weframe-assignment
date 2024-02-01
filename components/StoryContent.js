import Image from "next/image";
import StoryDp from "@/public/story-dp.png";
import Dots from "@/public/dots.svg";
import DownArrowSolid from "@/public/downArrowSolid.svg";
import StoryImage from "@/components/StoryImage";

export default function StoryContent() {
  return (
    <div className="mt-8 mx-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Image
              src={StoryDp}
              alt=""
              width={100}
              height={100}
              className="w-8"
            />
            <p className="text-[#A0A3BD] text-xl font-semibold">James Robert</p>
          </div>
          <p className="text-[#58A4FF] text-xl font-medium">
            Created on 13 January 2022
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center bg-[#FAFAFA] py-2 px-3 rounded-md">
            <p className="text-lg">Accessibility</p>
            <Image
              src={DownArrowSolid}
              alt=""
              width={100}
              height={100}
              className="w-6"
            />
          </button>
          <button className="bg-[#FAFAFA] px-4 py-[18px] rounded-md">
            <Image src={Dots} alt="" width={100} height={100} className="w-6" />
          </button>
        </div>
      </div>
      <StoryImage />
    </div>
  );
}
