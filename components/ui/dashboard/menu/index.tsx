import { Home } from "lucide-react";

import DashboardMenuItem from "./menu-item";
import ThemeToggle from "../../theme-toggle";

export default function DashboardMenu({
  menuItems,
}: {
  menuItems: MenuItem[];
}) {
  return (
    <>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {menuItems.map((item, index) => (
          <DashboardMenuItem menuItem={item} key={index} />
        ))}
      </nav>

      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <ThemeToggle />
        <DashboardMenuItem
          menuItem={{
            label: "Echo Home",
            icon: <Home className="h-5 w-5" />,
            href: "/",
          }}
        />
      </nav>
    </>
  );
}
