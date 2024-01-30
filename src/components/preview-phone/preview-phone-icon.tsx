"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

type PreviewPhoneIconProps = {
  activeValue: string;
  setActiveValue: React.Dispatch<React.SetStateAction<string>>;
  template: {
    displayName: string;
    key: string;
    gradientClass: string;
    imagePath?: string;
    inputClass: string;
  };
};

const PreviewPhoneIcon = ({
  activeValue,
  setActiveValue,
  template,
}: PreviewPhoneIconProps) => {
  return (
    <div className="flex-col gap-4 text-center">
      {template.imagePath ? (
        <div
          className={cn(
            "w-fit p-1 text-center bg-transparent",
            activeValue === template.key
              ? "border-slate-400 border-2 rounded-xl"
              : "border-transparent border-2 rounded-xl"
          )}
        >
          <button
            onClick={() => setActiveValue(template.key)}
            className={cn(
              "relative cursor-pointer p-4 h-[209px] w-[134px] rounded-lg",

              activeValue === template.key
                ? "scale-95  transition-all"
                : "scale-100  transition-all"
            )}
          >
            <div className="h-full w-full absolute top-0 left-0">
              <Image
                src={template.imagePath}
                fill
                priority
                alt={template.displayName}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 h-full justify-center">
              <div
                className={cn(
                  "h-[18px] w-full border border-white z-10",
                  template.inputClass
                )}
              />
              <div
                className={cn(
                  "h-[18px] w-full border border-white z-10",
                  template.inputClass
                )}
              />
              <div
                className={cn(
                  "h-[18px] w-full border border-white z-10",
                  template.inputClass
                )}
              />
            </div>
          </button>
        </div>
      ) : (
        <div
          className={cn(
            "w-fit p-1 text-center bg-transparent",
            activeValue === template.key
              ? "border-slate-400 border-2 rounded-xl"
              : "border-transparent border-2 rounded-xl"
          )}
        >
          <button
            onClick={() => setActiveValue(template.key)}
            className={cn(
              "relative cursor-pointer p-4 h-[209px] w-[134px] rounded-lg",
              template.gradientClass,
              activeValue === template.key
                ? "scale-95  transition-all"
                : "scale-100  transition-all"
            )}
          >
            <div className="flex flex-col gap-2 h-full justify-center">
              <div
                className={cn(
                  "h-[18px] w-full border border-white z-10",
                  template.inputClass
                )}
              />
              <div
                className={cn(
                  "h-[18px] w-full border border-white z-10",
                  template.inputClass
                )}
              />
              <div
                className={cn(
                  "h-[18px] w-full border border-white z-10",
                  template.inputClass
                )}
              />
            </div>
          </button>
        </div>
      )}
      <p>{template.displayName}</p>
    </div>
  );
};
export default PreviewPhoneIcon;
