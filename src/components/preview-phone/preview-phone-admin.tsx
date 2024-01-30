"use client";

import * as React from "react";

import { Icons } from "../icons";

const PreviewPhoneAdmin = () => {
  return (
    <div className="min-h-screen flex items-center fixed">
      <div
        className="h-[724px] w-[352px] p-4 preview-phone bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-content"
        id="preview-phone"
      >
        <div className="px-6">
          <div className="w-full flex justify-end pt-4 mt-2">
            <button className="cursor-pointer bg-white h-10 w-10 rounded-full flex items-center justify-center">
              <Icons.threeDots className="h-4 w-4" />
            </button>
          </div>
          <div className="w-full flex flex-col gap-6 items-center justify-center">
            <div className="h-[96px] w-[96px] bg-black rounded-full flex items-center justify-center text-3xl font-semibold text-white">
              L
            </div>
            <p className="text-xl font-bold">@lookupts</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreviewPhoneAdmin;
