"use client";

import * as React from "react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { XIcon } from "lucide-react";
import AppWrapper from "./link-apps/app-wrapper";
import { CustomInput } from "@/components/custom-ui/custom-input";
import { useAppSetting } from "@/hooks/use-app-setting";
import SocialMedia from "./link-apps/app-setting/social-media";

type FormInputProps = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormInput = ({ setFormOpen }: FormInputProps) => {
  const [openAppSearch, setOpenAppSearch] = React.useState(false);

  return (
    <Card className="rounded-3xl relative border-none">
      <CardHeader>
        <Button
          onClick={() => setFormOpen(false)}
          size="icon"
          variant="ghost"
          className="rounded-full h-12 w-12 ml-auto absolute top-2 right-2"
        >
          <XIcon className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-0">
        <div className="mb-4 px-6">
          <p className="font-bold text-xl mb-4">Enter URL</p>
          <div className="flex gap-4">
            <Input
              placeholder="URL"
              className="h-12 border-none bg-neutral-100 rounded-xl"
            />
            <Button
              variant="primary"
              className="h-12 font-bold text-base px-6 w-20"
            >
              Add
            </Button>
          </div>
        </div>
        <Separator orientation="horizontal" className="w-full my-7" />
        <div className="px-6">
          {openAppSearch && (
            <CustomInput
              placeholder="Search Links Apps"
              className="h-12 border-none bg-neutral-100"
            />
          )}
          {!openAppSearch && (
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold text-neutral-600">
                Inspired by your interests
              </p>
              <Button
                onClick={() => setOpenAppSearch(true)}
                size="icon"
                variant="ghost"
                className="rounded-full h-12 w-12 ml-auto border"
              >
                <Icons.searchIcon className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
        <div className="mt-4 px-6">
          <AppWrapper />
        </div>
      </CardContent>
    </Card>
  );
};
export default FormInput;
