import Nav from "@/components/Nav";
import { useState } from "react";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="h-full bg-white">
      <div className="flex items-center p-4 md:hidden">
        <button onClick={() => setShowNav((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
              fill="#212121"
            />
          </svg>
        </button>
      </div>
      <div className="flex w-screen">
        <Nav show={showNav} setShow={setShowNav} />
        <div className="flex-grow bg-[#F8FAFB] max-w-[80%]">{children}</div>
      </div>
    </div>
  );
}
