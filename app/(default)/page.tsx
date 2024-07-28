export const metadata = {
  title: "Echo - Report Anonymously",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import ReportButton from "@/components/report-button";

export default function Home() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Speak Out Safely with Echo"
            description="Echo is a blockchain-powered anonymous reporting platform that empowers individuals to report incidents safely and securely. Whether you're reporting harassment, misconduct, or any other issue, Echo protects your identity while ensuring your voice is heard."
          >
            Quiet Reports<span className="text-gray-300 mx-1">·</span> Loud Actions
          </PageHeader>

          <ReportButton />
        </div>
      </div>
    </section>
  );
}
