import { CircleX } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

interface AppDrawerProps {
  direction?: "top" | "bottom" | "right" | "left";
  open?: boolean;
  onOpenChange?: (val: boolean) => any;
  children?: React.ReactNode;
  dismissible?: boolean;
  closeBtnText?: string;
  trigger?: React.ReactNode;
  header?: {
    title?: string;
    description?: string;
    custom?: React.ReactNode;
    close?: () => void;
  };
  configure?: {
    content?: {
      className?: string;
      maxHeight?: string | number;
    };
  };
}

export default function AppDrawer({
  children,
  closeBtnText = "Close",
  trigger,
  onOpenChange,
  header,
  configure,
  ...otherProps
}: AppDrawerProps) {
  return (
    <Drawer {...otherProps}>
      {trigger && <DrawerTrigger>{trigger}</DrawerTrigger>}
      <DrawerContent
        className={`${configure?.content?.className} ${
          configure?.content?.maxHeight &&
          `max-h-[${configure?.content?.maxHeight}]`
        }`}
      >
        <DrawerHeader>
          {!header?.custom ? (
            <div
              className={`flex items-center justify-between w-full min-w-full ${
                header?.title || header?.description
                  ? "bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg p-4 shadow"
                  : ""
              }`}
            >
              <div className="flex-1 flex flex-col gap-2">
                <DrawerTitle>{header?.title}</DrawerTitle>
                <DrawerDescription>{header?.description}</DrawerDescription>
              </div>
              {header?.close && (
                <button type="button" onClick={() => header?.close?.()}>
                  <CircleX className="h-8 w-8 rounded-lg p-1 bg-gray-200 dark:bg-gray-500" />
                </button>
              )}
            </div>
          ) : (
            header.custom
          )}
        </DrawerHeader>

        <>{children}</>

        {trigger && (
          <DrawerFooter>
            <hr />
            <DrawerClose>
              <Button variant="outline">{closeBtnText}</Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
