"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-xl border border-input pl-3 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        <Icons.searchIcon className="h-4 w-4 mx-1" />
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-xl bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:font-semibold",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";

export { CustomInput };
