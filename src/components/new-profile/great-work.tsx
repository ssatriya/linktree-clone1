"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { ElementRef, useRef, useState } from "react";
import Wrapper from "./wrapper";

const GreatWork = () => {
  const urlRef = useRef<ElementRef<"p">>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    const textContent = urlRef.current?.textContent ?? "";
    navigator.clipboard.writeText(textContent);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Wrapper>
      <main className="relative flex w-full pt-6 md:px-2xl md:py-lg lg:justify-center lg:p-2xl lg:w-2/3">
        <div className="mt-8 w-full p-3 lg:!w-[640px] lg:pt-24">
          <div className="mb-14">
            <h1 className="text-5xl font-bold tracking-[1-px] lg:tracking-[-2px] mb-10 pt-4">
              Great work! You’ve got a brand new Linktree
            </h1>
          </div>
          <Card className="bg-stone-200 p-6 rounded-3xl flex items-center">
            <Avatar className="h-[70px] w-[70px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex w-full flex-col items-start">
              <p className="font-semibold text-base mb-2 ml-3">ssatriyagg</p>
              <div className="mb-2 ml-3 flex w-full justify-between">
                <div className="flex flex-row">
                  <img src="/linktree-logo.png" className="mr-1 h-4" />
                  <p className="text-sm" ref={urlRef}>
                    linktr.ee/ssatriyagg
                  </p>
                </div>
                <Button
                  onClick={onCopy}
                  variant="link"
                  className="underline font-normal underline-offset-1 p-0 m-0 mr-4 h-fit"
                >
                  {copied ? (
                    <p className="text-green-700">Copied!</p>
                  ) : (
                    <p className="text-purple-700">Copy URL</p>
                  )}
                </Button>
              </div>
            </div>
          </Card>
          <div className="mt-6 px-6 flex items-center">
            <Icons.user2 className="h-6 w-6 text-purple-700 mr-3" />
            <p className="text-sm">
              Your Linktree will now be managed by an account linked to
              <span className="font-bold"> ssatriya@gmail.com.</span>
            </p>
          </div>
          <div className="mt-2 px-6 flex items-center">
            <Icons.signIn className="h-6 w-6 text-purple-700 mr-3" />
            <p className="text-sm">
              Log in to manage all your profiles with the same method you logged
              into this account.
            </p>
          </div>
          <div className="mt-2 px-6 flex items-center">
            <Icons.switch2 className="h-6 w-6 text-purple-700 mr-3" />
            <p className="text-sm">
              To switch between Linktrees, go to the account menu in the top
              right and click on your profile.
            </p>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default GreatWork;
