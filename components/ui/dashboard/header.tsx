"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PanelLeft } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MainAvatar from "@/public/images/main-avatar.jpg";
import Breadcrumbs from "./menu/breadcrumbs";
import { MENU_ITEMS } from "./sidebar";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";

export default function DashboardHeader() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet
        open={openMobileMenu}
        onOpenChange={() => setOpenMobileMenu(false)}
      >
        <Button
          onClick={() => setOpenMobileMenu(true)}
          size="icon"
          variant="outline"
          className="sm:hidden"
        >
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <SheetContent side="left" className="sm:max-w-xs">
          <div className="flex items-center justify-between mt-10">
            <Logo />
            <ThemeToggle />
          </div>
          <nav className="grid gap-6 text-lg font-medium my-5">
            {MENU_ITEMS.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={() => setOpenMobileMenu(false)}
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <Breadcrumbs />
      <div className="relative ml-auto flex-1 md:grow-0">
        {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        /> */}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <Image
              src={session?.user?.image || MainAvatar}
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ redirect: true })}>
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
