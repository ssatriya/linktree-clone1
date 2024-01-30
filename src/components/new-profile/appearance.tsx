"use client";

import * as React from "react";

import Link from "next/link";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

import PreviewPhoneIcon from "../preview-phone/preview-phone-icon";
import PreviewProfilIcon from "../preview-phone/preview-profil-icon";
import Image from "next/image";
import { Button } from "../ui/button";

const Appearance = () => {
  const [activeValue, setActiveValue] = React.useState<string>("noir");

  const templateOptions = [
    {
      displayName: "Noir",
      key: "noir",
      gradientClass: "bg-gradient-to-t from-red-400 via-gray-300 to-blue-500",
      imagePath: "",
      inputClass: "rounded-full bg-transparent",
      profileClass: "bg-black text-white",
    },
    {
      displayName: "Banana",
      key: "banana",
      imagePath: "",
      gradientClass: "bg-gradient-to-r from-yellow-200 to-yellow-500",
      inputClass: "rounded-full bg-transparent",
      profileClass: "bg-lime-600 text-white",
    },
    {
      displayName: "Lavender",
      key: "lavender",
      imagePath: "",
      gradientClass: "bg-gradient-to-r from-indigo-300 to-purple-400",
      inputClass: "rounded-full bg-transparent",
      profileClass: "bg-black text-white",
    },
    {
      displayName: "Gotham",
      key: "gotham",
      gradientClass:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black",
      imagePath: "",
      inputClass: "rounded-sm bg-slate-500 border-none",
      profileClass: "bg-white",
    },
    {
      displayName: "Sunset",
      key: "sunset",
      gradientClass: "bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500",
      imagePath: "",
      inputClass: "rounded-sm bg-white border-none",
      profileClass: "bg-amber-400 text-white",
    },
    {
      displayName: "Aqua",
      key: "aqua",
      gradientClass:
        "bg-gradient-to-br from-cyan-400 via-teal-200 to-neutral-200",
      imagePath: "",
      inputClass: "rounded-full bg-cyan-500 border-none",
      profileClass: "bg-black text-white",
    },
    {
      displayName: "Darkness",
      key: "darkness",
      gradientClass: "bg-gradient-to-r from-slate-900 to-slate-700",
      imagePath: "",
      inputClass: "rounded-full bg-transparent border-slate-500",
      profileClass: "bg-white text-black",
    },
    {
      displayName: "Emerald",
      key: "emeral",
      gradientClass: "bg-gradient-to-r from-emerald-500 to-emerald-900",
      inputClass: "rounded-full bg-slate-300 border-none",
      profileClass: "bg-slate-300 text-black",
      imagePath: "/template-image/bear.jpg",
    },
  ] as const;

  const [preview] = templateOptions.filter(
    (template) => template.key === activeValue
  );

  return (
    <div className="min-h-screen">
      <div className="relative flex-row-reverse lg:flex lg:justify-end">
        <div className="flex">
          <div className="absolute left-12 top-8 z-50">
            <Link href="/">
              <Icons.linktreeLogo className="w-[120px]" />
            </Link>
          </div>
        </div>
        {/* Good to know below css rules */}
        <div className="relative hidden h-32 items-center justify-center overflow-hidden lg:fixed lg:right-0 lg:top-0 lg:!flex lg:min-h-screen lg:w-1/3 lg:shrink-0 transition-colors duration-500">
          <div className="h-full w-full bg-neutral-200 flex items-center justify-center">
            {/* Phone mockup */}
            {preview.imagePath ? (
              <div
                className={cn(
                  "relative h-[680px] w-[330px] rounded-[40px] flex justify-center"
                )}
              >
                <div className="absolute h-full w-full top-0 left-0">
                  <Image
                    src={preview.imagePath}
                    fill
                    priority
                    alt={preview.displayName}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="bg-white absolute top-5 right-6 h-10 w-10 rounded-full z-10">
                  <div className="flex gap-1 justify-center items-center h-full w-full">
                    <div className="bg-black w-1 h-1 rounded-full" />
                    <div className="bg-black w-1 h-1 rounded-full" />
                    <div className="bg-black w-1 h-1 rounded-full" />
                  </div>
                </div>
                <div className="absolute top-24">
                  <PreviewProfilIcon
                    profileClass={preview.profileClass}
                    style={"h-[100px] w-[100px]"}
                  />
                </div>
              </div>
            ) : (
              <div
                className={cn(
                  "relative h-[680px] w-[330px] rounded-[40px] flex justify-center",
                  preview.gradientClass
                )}
              >
                <div className="bg-white absolute top-5 right-6 h-10 w-10 rounded-full">
                  <div className="flex gap-1 justify-center items-center h-full w-full cursor-pointer">
                    <div className="bg-black w-1 h-1 rounded-full" />
                    <div className="bg-black w-1 h-1 rounded-full" />
                    <div className="bg-black w-1 h-1 rounded-full" />
                  </div>
                </div>
                <div className="absolute top-24">
                  <PreviewProfilIcon
                    profileClass={preview.profileClass}
                    style={"h-[100px] w-[100px]"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <main className="relative flex w-full pt-6 md:px-2xl md:py-lg lg:justify-center lg:p-2xl lg:w-2/3">
          <div className="mt-8 w-full p-3 lg:!w-[660px] lg:pt-24">
            <div className="mb-14">
              <h1 className="text-5xl font-bold leading-3 tracking-[1-px] lg:tracking-[-2px] mb-10 pt-4">
                Choose your appearance{" "}
              </h1>
              <p className="text-muted-foreground">
                You can change this and view more options later.
              </p>
            </div>
            <div className="mb-6">
              <PreviewProfilIcon profileClass={preview.profileClass} />
            </div>
            <div className="-mx-1">
              <p className="ml-2 mb-2 font-bold text-base">Themes</p>
              <div className="flex gap-4 flex-wrap">
                {templateOptions.map((template) => (
                  <PreviewPhoneIcon
                    key={template.key}
                    activeValue={activeValue}
                    setActiveValue={setActiveValue}
                    template={template}
                  />
                ))}
              </div>
            </div>
            <Button className="w-full rounded-full bg-purple-700 h-12 text-base font-semibold my-8">
              Create
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Appearance;
