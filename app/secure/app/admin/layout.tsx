"use client";

import { SessionProvider } from "next-auth/react";

import BgShapes from "@/components/bg-shapes";
import Sidebar from "@/components/ui/dashboard/sidebar";
import VerticalLines from "@/components/vertical-lines";
import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardHeader from "@/components/ui/dashboard/header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <VerticalLines />
      <BgShapes />

      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <Sidebar />

          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <DashboardHeader />
            <main className="grow p-4 sm:p-6">{children}</main>
          </div>
        </div>
      </TooltipProvider>
    </SessionProvider>
  );
}
