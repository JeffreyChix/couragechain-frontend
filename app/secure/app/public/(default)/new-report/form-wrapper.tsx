"use client";

import AppDrawer from "@/components/app-drawer";
import NewReportForm from "./form";
import { useSubmit } from "@/hooks/useSubmit";
import { REPORT_SERVICE } from "@/services/report";
import { Button } from "@/components/ui/button";
import SubmittingReport from "./submitting-report";

export default function NewReportFormWrapper() {
  const { isSubmitting, handleSubmit, success, setSuccess, data } = useSubmit(
    REPORT_SERVICE.MAKE_NEW_REPORT
  );

  return (
    <>
      <NewReportForm isSubmitting={isSubmitting} submitHandler={handleSubmit} />
      <AppDrawer open={isSubmitting || success} dismissible={false}>
        <SubmittingReport secretKey={data} isSuccessful={success} />
        {success && (
          <>
            <hr className="my-4" />
            <div className="grid place-items-center">
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={() => setSuccess(false)}
              >
                Close
              </Button>
            </div>
          </>
        )}
      </AppDrawer>
    </>
  );
}
