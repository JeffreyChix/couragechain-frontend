"use client"

import { useState } from "react";
import toast from "react-hot-toast";

const useRequestError = ({ useToast = false } = {}) => {
  const [error, setError] = useState<string | string[] | null>(null);

  const handleRequestError = async (arg: any) => {
    let caughtError;

    try {
      if (typeof arg === "function") {
        await Promise.resolve(arg());
      } else {
        caughtError = arg;
      }
    } catch (err) {
      caughtError = err;
    }

    if (caughtError) {
      const errorMessage = extractErrorMessage(caughtError);
      if (useToast) {
        showToast(errorMessage);
      } else {
        setError(errorMessage);
      }
    }
  };

  const extractErrorMessage = (error: any): string | string[] => {
    if (error?.response?.status === 422) {
      return error.response.data.error.details.map((err: any) => err.message);
    }
    return (
      error?.response?.data?.message ||
      error?.message ||
      "Sorry, an unknown error occurred!"
    );
  };

  const showToast = (message: string | string[]) => {
    const formattedMessage = Array.isArray(message)
      ? message.join("\n\n")
      : message;
    toast(formattedMessage, {
      style: {
        overflowX: "hidden",
        background: "#DC2626",
        color: "#fff",
      },
    });
  };

  const resetError = () => setError(null);

  return {
    error,
    resetError,
    handleRequestError,
    catch: handleRequestError,
  };
};

export { useRequestError };
