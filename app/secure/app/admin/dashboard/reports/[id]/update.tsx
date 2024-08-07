"use client";

import { useSubmit } from "@/hooks/useSubmit";
import UpdateForm from "./form";
import { REPORT_SERVICE } from "@/services/report";
import AppDrawer from "@/components/app-drawer";
import { Button } from "@/components/ui/button";
import SubmittingUpdate from "./submitting-update";

export default function Update({ id }: { id: string }) {
  const { isSubmitting, handleSubmit, success, setSuccess } = useSubmit(
    REPORT_SERVICE.NEW_REPORT_UPDATE
  );

  return (
    <div className="grid place-items-center">
      <UpdateForm
        id={id}
        isSubmitting={isSubmitting}
        submitHandler={handleSubmit}
      />

      <AppDrawer open={isSubmitting || success} dismissible={false}>
        <div className="w-full max-w-md mx-auto pb-20">
          <SubmittingUpdate isSuccessful={success} />
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
        </div>
      </AppDrawer>
    </div>
  );
}
