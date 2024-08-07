"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DashboardMenuItem({
  menuItem,
}: {
  menuItem: MenuItem;
}) {
  const { label, href, icon } = menuItem;

  const currentPathname = usePathname();
  const isActive = isActivePath(currentPathname, href)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`flex z-40 h-9 w-9 items-center justify-center rounded-lg md:h-8 md:w-8 ${
            isActive
              ? "bg-primary font-semibold text-primary-foreground"
              : "text-muted-foreground transition-colors hover:text-foreground"
          }`}
        >
          {icon}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}

const isActivePath = (currentPathname: string, href: string) => {
  if (href === "/secure/app/admin/dashboard" || href === "/") {
    return currentPathname === href;
  }

  return currentPathname === href || currentPathname.startsWith(href);
};
