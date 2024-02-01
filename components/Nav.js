import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import navItems from "@/pages/api/navItems.json";
import Image from "next/image";
import Headphone from "@/public/headphones.svg";
import Header from "./Header";

export default function Nav({ show, setShow }) {
  const inactiveLink = `flex items-center gap-4 px-3 py-4 md:px-4 rounded-xl`;
  const activeLink = inactiveLink + " bg-[#7950F2] text-white";
  const inactiveIcon = "w-6 h-6";
  const activeIcon = inactiveIcon + " invert";

  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={
        (show ? "left-0 w-full h-full md:min-w-[20%]" : "-left-full md:min-w-[20%]") +
        " fixed top-0 bottom-0 bg-[#FFFFFF] p-6 text-sm font-semibold text-[#53545C] transition-all md:static z-20 "
      }
    >
      <div className="mb-4 mr-4 flex justify-between">
        {show && (
          <button onClick={() => setShow(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="currentColor"
              className="h-6 w-6 lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`${
          show && "w-full pr-10 md:w-[17%] md:pr-0"
        } flex justify-between fixed z-10 flex-col h-full`}
      >
        <nav className="flex flex-col md:mt-14">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={
                pathname === `${item.link}` ? activeLink : inactiveLink
              }
            >
              <Image
                src={item.icon}
                alt=""
                width={100}
                height={100}
                className={
                  pathname === `${item.link}` ? activeIcon : inactiveIcon
                }
              />
              {item.name}{" "}
              {item.pointer && (
                <div className="rounded-full text-xs w-6 h-6 flex items-center justify-center bg-[#E8E9FF] text-[#7950F2]">
                  <p>{item.pointer}</p>
                </div>
              )}
            </Link>
          ))}
        </nav>
        <Link
          href="/"
          className="flex items-center w-full gap-4 mb-20 px-3 py-4 md:px-4 rounded-xl bg-[#E8E9FF]"
        >
          <Image
            src={Headphone}
            alt=""
            width={100}
            height={100}
            className="w-6 h-6"
          />
          Contact Support
        </Link>
      </div>
    </div>
  );
}
