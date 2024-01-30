"use client";

import * as React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Carousel = () => {
  const [position, setPosition] = React.useState(0);
  const [appear, setAppear] = React.useState<number[]>([1, 2]);

  const rightButton = () => {
    if (appear.includes(1) && appear.includes(2)) {
      setPosition(-120);
      setAppear([2]);
    } else if (appear.includes(2)) {
      setPosition(-240);
      setAppear([2, 3]);
    }
  };

  const leftButton = () => {
    if (appear.includes(2) && appear.includes(3)) {
      setPosition(-120);
      setAppear([2]);
    } else if (appear.includes(2)) {
      setPosition(0);
      setAppear([1, 2]);
    }
  };

  return (
    <div className="w-full h-10">
      <div className="flex justify-between items-baseline mb-3">
        <p className="text-sm font-semibold">Set up your Linktree</p>
        <div className="w-[100px] h-1 bg-neutral-300 rounded-full" />
      </div>
      <div className="relative h-20 flex items-center justify-center overflow-hidden group">
        {!appear.includes(1) && (
          <Button
            onClick={leftButton}
            className="absolute left-6 bg-white z-10 h-10 w-10 p-0 rounded-full hover:bg-gray-100 group-hover:shadow-next-shadow border"
          >
            <ChevronLeft className="h-7 w-7 text-black" />
          </Button>
        )}
        <div className="flex gap-2 items-center overflow-hidden">
          <div
            className={cn("relative")}
            style={{
              transform: `translateX(${position}px)`,
              transition: "transform",
              transitionDuration: "0.2s",
            }}
          >
            <Button className="h-20 w-72 bg-white rounded-3xl hover:bg-neutral-50 border text-black">
              1
            </Button>
          </div>
          <div
            className={cn("relative")}
            style={{
              transform: `translateX(${position}px)`,
              transition: "transform",
              transitionDuration: "0.2s",
            }}
          >
            <Button className="h-20 w-72 bg-white rounded-3xl hover:bg-neutral-50 border text-black">
              2
            </Button>
          </div>
          <div
            className={cn("relative")}
            style={{
              transform: `translateX(${position}px)`,
              transition: "transform",
              transitionDuration: "0.2s",
            }}
          >
            <Button className="h-20 w-72 bg-white rounded-3xl hover:bg-neutral-50 border text-black">
              3
            </Button>
          </div>
        </div>
        {!appear.includes(3) && (
          <Button
            onClick={rightButton}
            className="absolute right-6 bg-white z-10 h-10 w-10 p-0 rounded-full hover:bg-gray-100 group-hover:shadow-next-shadow border"
          >
            <ChevronRight className="h-7 w-7 text-black" />
          </Button>
        )}
      </div>
    </div>
  );
};
export default Carousel;
