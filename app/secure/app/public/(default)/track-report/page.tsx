"use client"

import TrackPageHeader from "@/components/track-page-header";
import Updates from "./updates";
import Divider from "@/components/divider";

export default function TrackReport() {
  return (
    <>
      <section>
        <div className="pt-5 pb-12">
          <div className="max-w-3xl mx-auto">
            <TrackPageHeader onSubmitKey={() => {}} />
            <Divider>Updates</Divider>
            <Updates />
          </div>
        </div>
      </section>
    </>
  );
}
