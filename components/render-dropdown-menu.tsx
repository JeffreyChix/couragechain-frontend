"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RenderDropdownMenuProps {
  children?: React.ReactNode;
  align?: "start" | "center" | "end";
  menus: DropdownMenu[];
}

export default function RenderDropdownMenu({
  children,
  align = "center",
  menus,
}: RenderDropdownMenuProps) {
  const router = useRouter();

  return (
    <DropdownMenu>
      {children && <DropdownMenuTrigger className="outline-0 ring-0">{children}</DropdownMenuTrigger>}
      <DropdownMenuContent align={align}>
        {menus.map(({ label, items }, index) => (
          <Fragment key={index}>
            {label && (
              <>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
              </>
            )}
            {items?.map(
              (
                {
                  title,
                  link,
                  onClick,
                  isCursorPointer,
                  className,
                  withSeparator,
                  disabled,
                },
                index
              ) => {
                const handleClick = () => {
                  if (link) {
                    router.push(link);
                  }
                  onClick?.();
                };
                return (
                  <Fragment key={index}>
                    <>
                      <DropdownMenuItem
                        onClick={handleClick}
                        className={`${
                          isCursorPointer && "cursor-pointer"
                        } ${className}`}
                        disabled={disabled}
                      >
                        {title}
                      </DropdownMenuItem>
                      {withSeparator && <DropdownMenuSeparator />}
                    </>
                  </Fragment>
                );
              }
            )}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
