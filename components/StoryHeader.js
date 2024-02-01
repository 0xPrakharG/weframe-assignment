import Image from "next/image";
import DP from "@/public/dp.svg";
import DownArrow from "@/public/downArrow.svg";
import Back from "@/public/back.svg";
import Link from "next/link";

export default function StoryHeader() {
  return (
    <div className="md:py-2 md:px-10 px-5 top-0 right-0 min-w-[80%] z-10 bg-white rounded-b-[20px] flex flex-wrap lg:flex-row items-center justify-between shadow-sm">
      <div className="flex gap-3 py-3 px-3 rounded-2xl w-fit">
        <Link href={"/content"} className="flex items-center gap-2">
          <Image src={Back} alt="" width={100} height={100} className="w-6" />
          <h6 className="font-bold text-3xl">Stories</h6>
        </Link>
      </div>
      <div className="flex items-center lg:justify-center gap-2 md:mt-1">
        <div className="flex items-center justify-between w-[297px] px-2 py-1 bg-[#FCFCFD] border border-[#E8EFF7] rounded-[10px]">
          <div className="flex gap-2">
            <Image src={DP} alt="" />
            <div className="flex flex-col font-medium justify-center text-[#373B5C]">
              <p className="text-[10px]">Welcome back,</p>
              <h5 className="text-[17px]">Akshita Patel</h5>
            </div>
          </div>
          <Image src={DownArrow} alt="" />
        </div>
      </div>
    </div>
  );
}
