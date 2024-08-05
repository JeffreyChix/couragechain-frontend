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
  title?: string;
  description?: string;
  closeBtnText?: string;
  trigger?: React.ReactNode;
}

export default function AppDrawer({
  children,
  title,
  description,
  closeBtnText = "Close",
  trigger,
  onOpenChange,
  ...otherProps
}: AppDrawerProps) {
  return (
    <Drawer {...otherProps}>
      {trigger && <DrawerTrigger>{trigger}</DrawerTrigger>}
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">{children}</div>
          {trigger && open === undefined && (
            <DrawerFooter>
              <hr />
              <DrawerClose>
                <Button variant="outline">{closeBtnText}</Button>
              </DrawerClose>
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
