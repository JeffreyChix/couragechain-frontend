import React from "react";
import clsx from "clsx";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface RenderDialogProps {
  children: React.ReactNode;
  open?: boolean;
  trigger?: React.ReactNode;
  onOpenChange?: (val: boolean) => void;
  withCloseButton?: boolean;
  className?: string;
  header?: {
    title: string;
    desc?: string;
  };
  configure?: {
    content?: {
      maxHeight?: string | number;
      height?: string | number;
    };
    fullScreen?: {
      title: string;
    };
  };
  isFullScreen?: boolean;
}

export default function RenderDialog({
  children,
  header,
  configure,
  trigger,
  isFullScreen = false,
  withCloseButton = false,
  ...otherProps
}: RenderDialogProps) {
  const close = () => {
    otherProps?.onOpenChange?.(false);
  };
  return (
    <Dialog {...otherProps}>
      {trigger && !isFullScreen && <DialogTrigger>{trigger}</DialogTrigger>}
      <DialogContent
        className={clsx(
          "outline-none outline-0",
          isFullScreen && "min-h-screen min-w-full !rounded-none"
        )}
        withCloseButton={withCloseButton}
      >
        {header && !isFullScreen && (
          <DialogHeader>
            <DialogTitle>{header.title}</DialogTitle>
            {header?.desc && (
              <DialogDescription>{header.desc}</DialogDescription>
            )}
          </DialogHeader>
        )}

        {isFullScreen && (
          <>
            <DialogHeader className="fixed left-0 top-0 w-full py-3 px-2 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 shadow">
              <div className="flex items-center justify-between">
                <h1 className="flex-1">{configure?.fullScreen?.title}</h1>
                <button type="button" onClick={close}>
                  <X className="h-6 w-6 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700" />
                </button>
              </div>
            </DialogHeader>

            <div className="my-10 grow overflow-auto">{children}</div>
          </>
        )}

        {!isFullScreen && children}
      </DialogContent>
    </Dialog>
  );
}
