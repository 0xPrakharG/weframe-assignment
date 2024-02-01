import advertisements from "@/pages/api/advertisements.json";
import Image from "next/image";
import Dots from "@/public/dots.svg";

export default function Advertisements() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-3 gap-4 mb-10">
      {advertisements.map((advertisement) => (
        <div
          key={advertisement.id}
          className="flex gap-2 shadow-[0px_0px_9px_0px_#999] rounded-xl bg-white"
        >
          <Image
            src={advertisement.image}
            alt=""
            width={100}
            height={100}
            className="h-full aspect-square w-full overflow-hidden rounded-l-xl"
          />
          <div className="flex flex-col px-2 py-2 justify-center mr-3">
            <h6 className="text-[20px] font-semibold">{advertisement.name}</h6>
            <p className="text-sm text-[#A0A3BD]">{advertisement.text}</p>
            <div className="flex items-center mt-1 gap-2">
              <button className="w-full py-2 bg-[#E8E9FF] rounded-md font-semibold text-[#7750F1]">View</button>
              <button className="px-4 bg-[#FAFAFA] h-full rounded-md">
                <Image src={Dots} alt="" width={100} height={100} className="w-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}