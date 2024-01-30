"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import Link from "next/link";
import * as React from "react";

type WrapperProps = {
  children: React.ReactNode;
  imageUrl?: string;
  backButton?: boolean;
};

const Wrapper = ({ children, imageUrl, backButton = false }: WrapperProps) => {
  return (
    <div className="min-h-screen">
      <div className="relative flex-row-reverse lg:flex lg:justify-end">
        <div className="flex">
          <div className="absolute left-12 top-8 z-50">
            <Link href="/">
              <Icons.linktreeLogo className="w-[120px]" />
            </Link>
            {backButton && (
              <div className="relative pt-2">
                <Button
                  variant="ghost"
                  className="h-12 text-purple-700 font-semibold text-base -mx-5 hover:bg-stone-200 hover:text-purple-700 rounded-full"
                >
                  <Icons.arrowLeft className="h-4 w-4 rotate-90 mr-2" /> Back to
                  admin
                </Button>
              </div>
            )}
          </div>
        </div>
        {/* Good to know below css rules */}
        <div className="relative hidden h-32 items-center justify-center overflow-hidden lg:fixed lg:right-0 lg:top-0 lg:!flex lg:min-h-screen lg:w-1/3 lg:shrink-0 transition-colors duration-500">
          <div className="h-full w-full">
            <Image
              src="/new-profile.webp"
              fill
              alt="new profile"
              className="object-cover"
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Wrapper;
