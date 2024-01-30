"use client";

import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import { Icons } from "@/components/icons";
import { InputLink } from "@/schema";
import LinkInput from "./link-input";
import { useAppSetting } from "@/hooks/use-app-setting";
import { useMutation } from "@tanstack/react-query";
import { createAppLink } from "@/actions/app-link";

const SocialMedia = () => {
  const [isPending, startTransition] = React.useTransition();
  const { id } = useAppSetting();

  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");

  const [titleEditing, setTitleEditing] = React.useState(false);
  const [urlEditing, setUrlEditing] = React.useState(false);

  const titleInputRef = React.useRef<React.ElementRef<"input">>(null);
  const urlInputRef = React.useRef<React.ElementRef<"input">>(null);

  const enabledTitleEditing = () => {
    setTitleEditing(true);
    setTimeout(() => {
      titleInputRef.current?.focus();
      if (title !== "") return;
      titleInputRef.current?.select();
    });
  };

  const enabledUrlEditing = () => {
    setUrlEditing(true);
    setTimeout(() => {
      urlInputRef.current?.focus();
      if (url !== "") return;
      urlInputRef.current?.select();
    });
  };

  const onSubmit = (values: InputLink) => {
    console.log(values.title);
    console.log(values.url);
  };

  return (
    <>
      <Card className="border border-amber-400 rounded-3xl p-0">
        <CardContent className="p-0 w-full">
          <div className="flex">
            <div role="button" className="flex items-center justify-center w-8">
              <GripVertical className="h-4 w-4" />
            </div>
            <div className="flex-col flex-1 p-6 space-y-2">
              <div
                className="flex items-center gap-2 cursor-pointer w-fit"
                role="button"
                onClick={enabledTitleEditing}
              >
                {titleEditing && (
                  <LinkInput
                    ref={titleInputRef}
                    value={title}
                    name="title"
                    onChange={setTitle}
                    onBlur={setTitleEditing}
                  />
                )}
                {!titleEditing && (
                  <>
                    <p className="text-sm font-semibold text-neutral-500 h-5">
                      Title
                    </p>
                    <Icons.pencilIcon className="w-4 h-4" />
                  </>
                )}
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer w-fit"
                role="button"
                onClick={enabledUrlEditing}
              >
                {urlEditing && (
                  <LinkInput
                    ref={urlInputRef}
                    value={url}
                    name="url"
                    onChange={setUrl}
                    onBlur={setUrlEditing}
                  />
                )}
                {!urlEditing && (
                  <>
                    <p className="text-sm font-semibold text-neutral-500 h-5">
                      URL
                    </p>
                    <Icons.pencilIcon className="w-4 h-4" />
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 bg-amber-100 rounded-b-3xl border border-t-amber-400">
          <p className="text-sm font-medium">
            Enter your {id?.[0]?.toUpperCase()}
            {id?.slice(1)} URL, then set up your link.
          </p>
        </CardFooter>
      </Card>
    </>
  );
};
export default SocialMedia;
