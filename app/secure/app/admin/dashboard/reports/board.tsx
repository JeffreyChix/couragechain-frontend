import ReportFolder from "@/components/report-folder";

export default function BoardView({
  reports = [],
}: {
  reports: FetchedReport[];
}) {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {reports.map(({ secretKey, date_of_submission, subject }, index) => (
          <ReportFolder
            key={index + secretKey}
            title={subject}
            id={secretKey}
            date={date_of_submission}
          />
        ))}
      </div>
    </div>
  );
}
