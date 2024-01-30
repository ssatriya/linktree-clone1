"use client";

import { usePathname } from "next/navigation";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Icons } from "../icons";
import LinkSwitch from "./link-switch";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    {
      href: "/admin",
      name: "Links",
      icon: <Icons.linksIcon className="h-4 w-4" />,
    },
    {
      href: "/appearance",
      name: "Appearance",
      icon: <Icons.appearanceIcon className="h-4 w-4" />,
    },
    {
      href: "/analytics",
      name: "Analytics",
      icon: <Icons.analyticsIcon className="h-4 w-4" />,
    },
    {
      href: "/settings",
      name: "Settings",
      icon: <Icons.settingsIcon className="h-4 w-4" />,
    },
  ];

  return (
    <div className="h-16 flex bg-white items-center justify-between gap-4 rounded-full p-2 shadow-sm relative">
      <Link
        href="/"
        className="h-16 w-16 flex items-center justify-center -ml-1"
      >
        <Icons.linktreeLogo className="w-6 h-6" />
      </Link>
      <div className="flex flex-grow overflow-x-auto gap-2">
        {links.map((link) => (
          <Button
            key={link.href}
            className={cn(
              "rounded-xl px-2 font-semibold",
              pathname === link.href ? "text-black" : "text-muted-foreground"
            )}
            variant="ghost"
          >
            <span className="mr-2">{link.icon}</span>
            {link.name}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="secondary" className="h-10 rounded-full">
          <Icons.lightning className="mr-2" /> Try Pro for free
        </Button>
        <Button variant="outline" className="h-10 rounded-full">
          <Icons.share className="mr-2" /> Share
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[340px] rounded-2xl px-6 pt-2 absolute right-0 top-0 border-none shadow-lg"
            align="end"
          >
            <div className="relative">
              <LinkSwitch />
              <Button
                variant="outline"
                className="h-12 font-semibold w-full rounded-full text-base mb-6"
              >
                Create a new Linktree
              </Button>
              <DropdownMenuLabel className="text-gray-600 p-0 pb-3">
                Account
              </DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer h-12 hover:bg-zinc-100 rounded-xl p-4 -mx-4">
                <Icons.user className="mr-4" /> My Account
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer h-12 hover:bg-zinc-100 rounded-xl p-4 -mx-4">
                <Icons.dollarRounded className="mr-4" /> Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer h-12 hover:bg-zinc-100 rounded-xl p-4 -mx-4">
                <Icons.warning className="mr-4" /> Cookie preference
              </DropdownMenuItem>
              <DropdownMenuLabel className="text-gray-600 p-0 py-3">
                Support
              </DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer h-12 hover:bg-zinc-100 rounded-xl p-4 -mx-4">
                <Icons.warning className="mr-4" /> Ask questions
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer h-12 hover:bg-zinc-100 rounded-xl p-4 -mx-4">
                <Icons.user className="mr-4" /> Help topics
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer h-12 hover:bg-zinc-100 rounded-xl p-4 -mx-4">
                <Icons.message className="mr-4" /> Submit feedback
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer h-12 hover:bg-zinc-100 rounded-xl p-4 -mx-4">
                <Icons.switch className="mr-4" /> Switch account
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer h-12 hover:bg-zinc-100 rounded-xl p-4 -mx-4">
                <Icons.signOut className="mr-4" /> Sign out
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Navbar;
