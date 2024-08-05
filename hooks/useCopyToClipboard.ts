"use client";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      toast.error("Failed to copy text!");
    }
  };

  return { isCopied, copyToClipboard };
};

export { useCopyToClipboard };
