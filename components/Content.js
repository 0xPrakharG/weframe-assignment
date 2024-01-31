import React from "react";
import Grid from "./Grid";
import SubHeading from "./SubHeading";
import Articles from "./Articles";
import Advertisements from "./Advertisements";

export default function Content() {
  return (
    <div className="pl-10 pt-32">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-[#212121] text-4xl">Hello Admin,</h1>
        <p className="text-[#A0A3BD] text-[17px] font-normal">
          This is what we got you for today
        </p>
      </div>
      <div className="pr-10">
        <Grid />
      </div>
      <div className="pr-10">
        <SubHeading name={"Top Articles"} />
      </div>
      <Articles />
      <div className="pr-10">
        <SubHeading name={"Top Stories"} />
      </div>
      <div></div>
      <div className="pr-10">
        <SubHeading name={"Advertisements"} />
        <Advertisements />
      </div>
    </div>
  );
}
