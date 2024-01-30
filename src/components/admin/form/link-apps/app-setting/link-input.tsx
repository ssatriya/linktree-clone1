"use client";

import * as React from "react";

type LinkInputProps = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onBlur: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
};

type Ref = HTMLInputElement;

const LinkInput = React.forwardRef<Ref, LinkInputProps>((props, ref) => {
  const { value, name, onChange, onBlur } = props;

  return (
    <input
      ref={ref}
      type="text"
      name={name}
      aria-label={name}
      className="w-full h-5 focus-visible:outline-none focus-within:ring-0 text-sm font-semibold text-neutral-500 p-0 m-0"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => {
        if (value !== "") return;
        onBlur(false);
      }}
    />
  );
});

LinkInput.displayName = "LinkInput";

export default LinkInput;
