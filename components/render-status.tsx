export default function RenderStatus({ status }: { status: ReportStatus }) {
  const __status =
    status === "under_investigation" ? "under investigation" : status;

  return <span className={`report-status ${status}`}>{__status}</span>;
}
