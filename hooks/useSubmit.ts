"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { useRequestError } from "./useRequestError";

const useSubmit = (
  service: (payload: any) => Promise<any>,
  {
    reload,
    handleErrorWithToast = true,
    onError,
  }: {
    reload?: () => void;
    handleErrorWithToast?: boolean;
    onError?: (err?: any) => void;
  } = {}
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<any>(null);

  const router = useRouter();

  const { handleRequestError, error, resetError } = useRequestError({
    useToast: handleErrorWithToast,
  });

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);
    setSuccess(false);
    resetError();

    try {
      const result = await service(values);
      setData(result);
      setSuccess(true);
      reload?.();
    } catch (err) {
      handleRequestError(err);
      onError?.(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    data,
    success,
    error,
    handleSubmit,
    resetError,
    router,
  };
};

export type UseSubmitReturn = ReturnType<typeof useSubmit>;

export { useSubmit };
