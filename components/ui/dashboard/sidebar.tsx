import {
  Users2,
  FolderTree,
  LayoutDashboard,
  FileStack,
  EarthLock,
} from "lucide-react";

import DashboardMenu from "./menu";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 px-3 shadow sm:flex">
      <DashboardMenu menuItems={MENU_ITEMS} />
    </aside>
  );
}

const MENU_ITEMS: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: "/secure/app/admin/dashboard",
  },
  {
    label: "Reports",
    icon: <FolderTree className="h-5 w-5" />,
    href: "/secure/app/admin/dashboard/reports",
  },
  // {
  //   label: "Users",
  //   icon: <Users2 className="h-5 w-5" />,
  //   href: "/secure/app/admin/dashboard/users",
  // },
  // {
  //   label: "Documents",
  //   icon: <FileStack className="h-5 w-5" />,
  //   href: "/secure/app/admin/dashboard/documents",
  // },
  // {
  //   label: "Blockchain",
  //   icon: <EarthLock className="h-5 w-5" />,
  //   href: "/secure/app/admin/dashboard",
  // },
];
