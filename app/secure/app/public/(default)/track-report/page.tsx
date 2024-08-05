export const metadata = {
  title: "Track Your Report",
};

import { Suspense } from "react";

import TrackReportWrapper from "./wrapper";
import Loading from "@/components/loading";

export default function TrackReport() {
  return (
    <>
      <section>
        <div className="pt-5 pb-12">
          <div className="max-w-3xl mx-auto">
            <Suspense
              fallback={<Loading loading loadingMessage="Just a second..." />}
            >
              <TrackReportWrapper />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
