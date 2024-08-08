"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import logo from "@/public/images/logo.png";
import logoDark from "@/public/images/logo-dark.png";

export default function Logo({ isLink = true }: { isLink?: boolean }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const Logo = (
    <Image
      src={theme === "dark" ? logoDark : logo}
      alt="Echo Logo"
      width={80}
    />
  );

  return isLink ? (
    <Link href="/" className="cursor-pointer">
      {Logo}
    </Link>
  ) : (
    Logo
  );
}
