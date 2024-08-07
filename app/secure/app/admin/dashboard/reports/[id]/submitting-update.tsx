import { ShieldCheck } from "lucide-react";

import { InProgress } from "@/app/secure/app/public/(default)/new-report/submitting-report";
import Transition from "@/components/transition";

export default function SubmittingUpdate({
  isSuccessful,
}: {
  isSuccessful: boolean;
}) {
  return (
    <div>
      <Transition transitionKey={String(isSuccessful)}>
        {!isSuccessful ? (
          <InProgress
            loadingMessage="Submitting update..."
            message="We're encrypting the update. This might take while."
          />
        ) : (
          <>
            <div className="flex flex-col justify-center items-center space-y-1">
              <ShieldCheck size={70} className="text-green-700" />
              <h2 className="text-2xl">Update submitted!</h2>
            </div>

            <p className="my-2 text-center">You can close this now!</p>
          </>
        )}
      </Transition>
    </div>
  );
}
