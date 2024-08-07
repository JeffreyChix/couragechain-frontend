"use client";

import { Fragment } from "react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export default function Breadcrumbs() {
  const { breadcrumbs, getRoutePath, isLastRoute } = useBreadcrumbs();

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {breadcrumbs.map((bc, index) => {
          const isLast = isLastRoute(index);

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  {isLast ? (
                    <p className="capitalize">{bc}</p>
                  ) : (
                    <Link href={getRoutePath(index)} className="capitalize">
                      {bc}
                    </Link>
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
