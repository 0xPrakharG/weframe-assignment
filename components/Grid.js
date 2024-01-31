import gridItems from "@/pages/api/gridItems";
import Image from "next/image";

export default function Grid() {
  return (
    <div className="mt-7 grid grid-cols-4 gap-3">
      {gridItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center p-4 bg-white rounded-2xl gap-3"
        >
          <div className="w-fit rounded-full bg-[#E8E9FF] p-3">
            <Image
              src={item.icon}
              alt={item.name}
              width={100}
              height={100}
              className="w-6"
            />
          </div>
          <div className="flex items-start gap-1 flex-col">
            <h3 className="text-xl text-[#212121] font-semibold">
              {item.name}
            </h3>
            <p className="text-[#22285E] text-sm font-normal">
              {item.number} New Updates
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
