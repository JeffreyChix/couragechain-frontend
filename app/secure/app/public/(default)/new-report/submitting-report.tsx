"use client";

import Link from "next/link";
import { CopyIcon, ShieldCheck, CheckCheck } from "lucide-react";

import GradientBox from "@/components/gradient-box";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import Loading from "@/components/loading";
import Transition from "@/components/transition";

export default function SubmittingReport({
  secretKey,
  isSuccessful,
}: {
  isSuccessful: boolean;
  secretKey: string;
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="min-h-[320px]">
      <Transition transitionKey={String(isSuccessful)}>
        {!isSuccessful ? (
          <InProgress />
        ) : (
          <>
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="flex flex-col justify-center items-center space-y-1">
                <ShieldCheck size={70} className="text-green-700" />
                <h2 className="text-2xl">Report uploaded!</h2>
              </div>

              <GradientBox>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center gap-1">
                    <input
                      defaultValue={secretKey}
                      readOnly
                      className="uppercase text-center text-black dark:text-white font-bold border-transparent focus:border-transparent focus:ring-0 text-xl sm:text-xl bg-transparent"
                    />
                    <Button
                      size="sm"
                      type="button"
                      className="px-3 transition-all duration-300"
                      onClick={() => copyToClipboard(secretKey)}
                    >
                      <span className="sr-only">Copy</span>
                      {!isCopied ? (
                        <CopyIcon
                          className={`h-4 w-4 transition-opacity duration-300 ${
                            isCopied ? "opacity-0 absolute" : "opacity-100"
                          }`}
                        />
                      ) : (
                        <CheckCheck
                          className={`h-4 w-4 transition-opacity duration-300 ${
                            isCopied ? "opacity-100" : "opacity-0 absolute"
                          }`}
                        />
                      )}
                    </Button>
                  </div>
                </div>
              </GradientBox>
            </div>

            <div className="text-center mt-4">
              <Link
                href={`/secure/app/public/track-report/?secret-key=${encodeURIComponent(
                  secretKey
                )}`}
                target="_blank"
                rel="noopener noreferer"
                className="underline text-indigo-400"
              >
                Track this report
              </Link>
              <p className="mt-2">
                Here is your secret key, which you can use to track your report
                if you choose to do so. This is the only time it will be
                displayed. Once you close this drawer or refresh this page, the
                key will no longer be accessible. Please copy and save it in a
                secure place, such as a password manager.
              </p>
            </div>
          </>
        )}
      </Transition>
    </div>
  );
}

const InProgress = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <Loading loading size={30} loadingMessage="Submitting report..." />
        <p className="text-center border-t py-2">
          We're encrypting your report and attachments. This process might take
          a moment. Please be patient while we ensure your data is secure.
        </p>
      </div>
    </div>
  );
};
