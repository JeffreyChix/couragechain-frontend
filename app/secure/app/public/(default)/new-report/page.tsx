export const metadata = {
  title: "New Anon Report - Echo",
  description: "Page description",
};

import ReportPageHeader from "@/components/report-page-header";
import NewReportFormWrapper from "./form-wrapper";

export default function NewReport() {
  return (
    <>
      <section>
        <div className="pt-5 pb-12">
          <div className="max-w-3xl mx-auto">
            <ReportPageHeader />
            <NewReportFormWrapper />
          </div>
        </div>
      </section>
    </>
  );
}
