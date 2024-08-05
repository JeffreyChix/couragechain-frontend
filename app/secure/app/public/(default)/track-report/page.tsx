export const metadata = {
  title: "Track Your Report"
}

import TrackReportWrapper from "./wrapper";

export default function TrackReport() {
  return (
    <>
      <section>
        <div className="pt-5 pb-12">
          <div className="max-w-3xl mx-auto">
            <TrackReportWrapper />
          </div>
        </div>
      </section>
    </>
  );
}
