import * as React from "react";

import Navbar from "@/components/navbar/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screem w-full p-2">
      <Navbar />
      {children}
    </div>
  );
}
