"use client";

import Image from "next/image";

import { Platform } from "@/types";
import { Button } from "@/components/ui/button";
import { useAppSetting } from "@/hooks/use-app-setting";
import { useOnOpen } from "@/hooks/use-on-open";

type AppButtonProps = {
  data: {
    name: string;
    imagePath: string;
    value: Platform;
  };
};

const AppButton = ({ data: { name, imagePath, value } }: AppButtonProps) => {
  const { onOpen } = useAppSetting();
  const { onClose: onFormClose } = useOnOpen();

  return (
    <div className="mb-2">
      <Button
        onClick={() => {
          onOpen(value);
          onFormClose();
        }}
        className="bg-neutral-100 rounded-3xl mb-2 h-[88px] w-[88px] hover:bg-neutral-100 hover:border"
      >
        <Image src={imagePath} height={40} width={40} alt={name} />
      </Button>
      <p className="text-center text-xs font-bold text-neutral-80">{name}</p>
    </div>
  );
};
export default AppButton;
