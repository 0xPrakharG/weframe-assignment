import Image from "next/image";
import Search from "@/public/search.svg";
import Calendar from "@/public/calendar.svg";
import DP from "@/public/dp.svg";
import DownArrow from "@/public/downArrow.svg";

export default function Header() {
  return (
    <div className="py-4 px-10 fixed top-0 right-0 w-[80%] z-10 bg-white rounded-b-[20px] flex items-center justify-between">
      <div className="flex gap-3 bg-[#FCFCFD] py-3 px-3 rounded-2xl w-fit">
        <Image
          src={Search}
          alt=""
          width={100}
          height={100}
          className="w-6 h-6"
        />
        <input
          type="text"
          placeholder="Search"
          className="text-sm font-medium w-[250px] bg-transparent"
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-3 items-center text-lg font-medium text-[#313145] bg-[#FAFAFA] border border-[#A0A3BD] rounded-[10px] py-2 px-3">
          <p>11-10-2022</p>
          <span>
            <Image src={Calendar} alt="" />
          </span>
          <p>OR</p>
          <p>11-10-2022</p>
          <span>
            <Image src={Calendar} alt="" />
          </span>
        </div>
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
