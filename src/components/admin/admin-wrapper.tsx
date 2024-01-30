"use client";

import * as React from "react";

import Carousel from "../carousel";
import { Icons } from "../icons";
import PreviewPhoneAdmin from "../preview-phone/preview-phone-admin";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import FormInput from "./form/form-input";
import { useAppSetting } from "@/hooks/use-app-setting";
import { useOnOpen } from "@/hooks/use-on-open";
import SocialMedia from "./form/link-apps/app-setting/social-media";

type AdminWrapperProps = {};

const AdminWrapper = ({}: AdminWrapperProps) => {
  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onClose: onFormClose,
  } = useOnOpen();
  const { isOpen: isOpenAppSetting, id } = useAppSetting();

  return (
    <div className="flex relative">
      <div className="flex flex-1 shrink-0 pr-4 pl-2">
        <div className="flex w-full flex-col space-y-10 items-center">
          <Card className="w-full h-[72px] mt-2 bg-blue-100 border-none rounded-3xl px-4 py-3 flex">
            <CardContent className="flex justify-between w-full items-center h-full p-0">
              <div className="hidden xl:flex gap-3 items-center">
                <Icons.warning />
                <p className="text-sm font-semibold">
                  Your Linktree is live:{" "}
                  <a
                    href="#"
                    className="font-normal underline underline-offset-2"
                  >
                    linktr.ee/lookupts
                  </a>
                </p>
              </div>

              <div className="flex gap-3 xl:hidden">
                <Icons.warning />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">
                    Your Linktree is live:{" "}
                    <a
                      href="#"
                      className="font-normal underline underline-offset-2"
                    >
                      linktr.ee/lookupts
                    </a>
                  </p>
                  <p className="text-sm">Share your Linktree to your socials</p>
                </div>
              </div>
              <div className="gap-3 flex items-center">
                <p className="text-sm hidden xl:block">
                  Share your Linktree to your socials
                </p>
                <Button className="bg-white text-black rounded-full font-bold h-12 hover:bg-slate-100">
                  Copy URL
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Input */}
          <div className="max-w-2xl px-4 m-auto h-full w-full">
            <div className="mb-24">
              <Carousel />
            </div>
            <div className="py-10">
              {isFormOpen && <FormInput setFormOpen={onFormClose} />}
              {!isFormOpen && (
                <Button
                  onClick={() => onFormOpen("add-link-form")}
                  className="w-full bg-purple-700 rounded-full h-12 text-base font-medium hover:bg-purple-800"
                >
                  <Icons.plusIcon className="h-6 mr-2" />
                  Add link
                </Button>
              )}
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="bg-transparent rounded-full hover:bg-neutral-50"
                >
                  <Icons.headerIcon className="w-4 h-4 mr-2" />
                  Add header
                </Button>
              </div>
              {isOpenAppSetting && (
                <div className="mt-6">
                  <SocialMedia />
                </div>
              )}
              {!isOpenAppSetting && (
                <div className="flex flex-col items-center justify-center mt-16 full">
                  <Icons.linktreeLogo className="h-20 w-20 fill-neutral-300" />
                  <p className="text-neutral-400 font-semibold line-clamp-2 max-w-[230px] text-center mt-6">
                    Show the world who you are. Add a link to get started.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* =========== */}
      <div className="hidden min-[769px]:flex min-[769px]:w-[300px] min-[992px]:w-[435px] xl:w-[570px] border-l items-center justify-center h-screen pb-36 z-20">
        <PreviewPhoneAdmin />
      </div>
    </div>
  );
};
export default AdminWrapper;
