import { create } from "zustand";

import { Platform } from "@/types";

type AppSettingStore = {
  id?: Platform;
  isOpen: boolean;
  onOpen: (id: Platform) => void;
  onClose: () => void;
};

export const useAppSetting = create<AppSettingStore>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: Platform) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false, id: undefined }),
}));
