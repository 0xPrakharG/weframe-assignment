import React from "react";
import Grid from "./Grid";
import SubHeading from "./SubHeading";
import Articles from "./Articles";
import Advertisements from "./Advertisements";
import Stories from "./Stories";

export default function Content() {
  return (
    <div className="md:pl-10 md:pt-40 lg:pt-32 pl-5 pt-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-[#212121] text-4xl">Hello Admin,</h1>
        <p className="text-[#A0A3BD] text-[17px] font-normal">
          This is what we got you for today
        </p>
      </div>
      <div className="md:pr-10 pr-5">
        <Grid />
      </div>
      <div className="md:pr-10 pr-5">
        <SubHeading name={"Top Articles"} />
      </div>
      <Articles />
      <div className="md:pr-10 pr-5">
        <SubHeading name={"Top Stories"} />
      </div>
      <Stories />
      <div className="md:pr-10 pr-5">
        <SubHeading name={"Advertisements"} />
        <Advertisements />
      </div>
    </div>
  );
}
