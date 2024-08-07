"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FolderOpen, FolderClosed } from "lucide-react";
import { getDateInTimeZone } from "@/utils/date";

export default function ReportFolder({
  id,
  title,
  date,
}: {
  id: string;
  title: string;
  date: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const linkElement = linkRef.current;

    if (linkElement) {
      linkElement.addEventListener("mouseenter", handleMouseEnter);
      linkElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (linkElement) {
        linkElement.removeEventListener("mouseenter", handleMouseEnter);
        linkElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Link
      ref={linkRef}
      href={`/secure/app/admin/dashboard/reports/${id}`}
      className="block transition-all duration-200 ease-linear hover:-mt-3 hover:scale-105 p-2 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg shadow shadow-black/5"
    >
      <div>
        <div className="flex justify-end">
          <span className="text-xs text-indigo-400">{getDateInTimeZone(date)}</span>
        </div>
        <div className="grid place-items-center">
          {isHovered ? (
            <FolderOpen className="h-40 w-40" />
          ) : (
            <FolderClosed className="h-40 w-40" />
          )}

          <h4 className="text-center">{title}</h4>
        </div>
      </div>
    </Link>
  );
}
