"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function StellarLogo() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-8 grid place-items-center my-2">
      {theme === "dark" ? <StellarDark /> : <StellarLight />}
    </div>
  );
}

const StellarLight = () => (
  <Image
    src={"https://developers.stellar.org/img/stellar-logo.svg"}
    alt="Stellar Logo"
    width={100}
    height={100}
    className="h-full max-w-full"
  />
);

const StellarDark = () => (
  <Image
    src={"https://developers.stellar.org/img/stellar-logo-dark.svg"}
    alt="Stellar Logo Dark"
    width={100}
    height={100}
    className="h-full max-w-full"
  />
);
