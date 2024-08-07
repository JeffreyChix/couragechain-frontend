"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { useWatch } from "./useWatch";

type SerializerFunction = (value: any) => string | undefined;
type DeserializerFunction = (value: string) => any;

interface Options {
  serializer?: SerializerFunction;
  deserializer?: DeserializerFunction;
}

export function useRouterQueryState<T>(
  name: string,
  defaultValue?: T,
  opts: Options = {}
): [T, Dispatch<SetStateAction<T>>] {
  const router = useRouter();

  const serialize = (value: T): string | undefined => {
    if (opts.serializer) {
      return opts.serializer(value);
    }
    return value as string;
  };

  const deserialize = (value: string): T => {
    if (opts.deserializer) return opts.deserializer(value);

    // default deserializer for number type
    if (typeof defaultValue === "number") {
      const numValue = Number(value);
      return isNaN(numValue) ? (defaultValue as T) : (numValue as T);
    }
    if (typeof defaultValue === "boolean") {
      return Boolean(JSON.parse(value)) as T;
    }
    return value as T;
  };

  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();

  const paramValue = newSearchParams.get(name);

  const [state, setState] = useState<T>(() => {
    if (paramValue === undefined || paramValue === null)
      return defaultValue as T;

    return deserialize(paramValue as string);
  });

  useWatch(() => {
    const serializedState = serialize(state);

    if (serializedState === undefined) {
      if (paramValue) {
        newSearchParams.delete(name);
      }
    } else {
      newSearchParams.set(name, serializedState);
    }
    router.push(pathname + "?" + newSearchParams.toString());
  }, [state, name]);

  return [state, setState];
}
