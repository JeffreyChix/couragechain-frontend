export default function RenderStatus({ status }: { status: ReportStatus }) {
  const __status = status === "in-review" ? "in review" : status;

  return (
    <span
      className={`report-status ${
        status === "in-review" ? "in_review" : status
      }`}
    >
      {__status}
    </span>
  );
}
