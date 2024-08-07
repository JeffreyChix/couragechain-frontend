"use client";

import { usePathname } from "next/navigation";

const BASE_PATH = "/secure/app/admin/";

const useBreadcrumbs = () => {
  const pathname = usePathname();
  const breadcrumbs = pathname.slice(pathname.indexOf("dashboard")).split("/");

  const getRoutePath = (index: number) => {
    if (index === 0) {
      return `${BASE_PATH}${breadcrumbs[index]}`;
    }
    return `${BASE_PATH}${breadcrumbs.slice(0, index).join("/")}/${
      breadcrumbs[index]
    }`;
  };

  const isLastRoute = (index: number) => index === breadcrumbs.length - 1;

  return { breadcrumbs, getRoutePath, isLastRoute };
};

export { useBreadcrumbs };
