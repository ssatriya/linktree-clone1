"use client";

import { cn } from "@/lib/utils";

type PreviewProfilIconProps = {
  profileClass: string;
  style?: string;
};

const PreviewProfilIcon = ({ profileClass, style }: PreviewProfilIconProps) => {
  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center text-3xl font-semibold",
        profileClass,
        style
          ? style
          : "h-[76px] w-[76px] outline outline-black outline-offset-2 outline-2"
      )}
    >
      L
    </button>
  );
};
export default PreviewProfilIcon;
