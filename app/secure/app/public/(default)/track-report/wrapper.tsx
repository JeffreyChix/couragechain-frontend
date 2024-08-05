"use client";

import useSWR from "swr";
import toast from "react-hot-toast";
import { useEffect } from "react";

import TrackPageHeader from "@/components/track-page-header";
import Updates from "./updates";
import Divider from "@/components/divider";
import { useRouterQueryState } from "@/hooks/useRouterQueryState";
import { REPORT_SERVICE } from "@/services/report";

export default function TrackReportWrapper() {
  const [secretKey, setSecretKey] = useRouterQueryState("secret-key", "");

  const { isLoading, error, data } = useSWR(secretKey, () =>
    REPORT_SERVICE.GET_REPORT_UPDATES(secretKey)
  );

  useEffect(() => {
    const errorMessage = error?.response?.data?.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [error]);

  return (
    <>
      <TrackPageHeader
        defaultValue={secretKey}
        onSubmitKey={(val: string) => setSecretKey(val)}
      />
      <Divider>Updates</Divider>
      <Updates loading={isLoading} updates={data} />
    </>
  );
}
