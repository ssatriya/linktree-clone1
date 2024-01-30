"use client";

import { Platform } from "@/types";
import AppButton from "./app-button";

type LinksApp = {
  name: string;
  imagePath: string;
  value: Platform;
}[];

const linkApps: LinksApp = [
  {
    name: "Cameo",
    imagePath: "/app-icon/cameo-icon.svg",
    value: "cameo",
  },
  {
    name: "Bandsintown",
    imagePath: "/app-icon/bands-in-town-icon.svg",
    value: "bandsintown",
  },
  {
    name: "Video",
    imagePath: "/app-icon/video-icon.svg",
    value: "video",
  },
  {
    name: "X",
    imagePath: "/app-icon/x-icon.svg",
    value: "x",
  },
  {
    name: "Header",
    imagePath: "/app-icon/header-icon.svg",
    value: "header",
  },
  {
    name: "Music",
    imagePath: "/app-icon/music-icon.svg",
    value: "music",
  },
];

const AppWrapper = () => {
  return (
    <div className="flex gap-3 items-center justify-evenly">
      {linkApps.map((app, index) => (
        <AppButton key={index} data={app} />
      ))}
    </div>
  );
};
export default AppWrapper;
