import advertisements from "@/pages/api/advertisements.json";
import Image from "next/image";
import Dots from "@/public/dots.svg";
import Link from "next/link";

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
              <Link
                href={"/"} aria-label="view"
                className="w-full py-2 flex justify-center bg-[#E8E9FF] rounded-md font-semibold text-[#7750F1]"
              >
                View
              </Link>
              <Link href={"/"} aria-label="dots" className="px-4 flex justify-center bg-[#FAFAFA] h-full rounded-md">
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
