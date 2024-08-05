"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  UseFormReset,
  Path,
  PathValue,
  FieldValues,
  UseFormResetField,
} from "react-hook-form";

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

  const handleSubmit = async <T extends FieldValues>(
    values: T,
    options?: HandleSubmitFuncOptions<T>
  ) => {
    setIsSubmitting(true);
    setSuccess(false);
    resetError();

    try {
      const result = await service(values);
      setData(result);
      setSuccess(true);
      reload?.();

      options?.resetHookForm?.();
      if (options?.resetHookField) {
        const { reset, name, opts } = options.resetHookField;
        reset(name, opts);
      }
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
    setSuccess,
    error,
    handleSubmit,
    resetError,
    router,
  };
};

export type UseSubmitReturn = ReturnType<typeof useSubmit>;

type HandleSubmitFuncOptions<T extends FieldValues> = {
  resetHookForm?: UseFormReset<T>;
  resetHookField?: {
    name: Path<T>;
    opts?: PathValue<T, Path<T>>;
    reset: UseFormResetField<T>;
  };
};

export type HandleSubmitFunc<T extends FieldValues> = (
  values: T,
  options?: HandleSubmitFuncOptions<T>
) => Promise<void>;

export { useSubmit };
