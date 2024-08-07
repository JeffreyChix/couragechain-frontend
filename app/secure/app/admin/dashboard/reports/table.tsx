import RenderTable from "@/components/render-table";
import { REPORT_DATA_COLUMNS } from "@/lib/table";

export default function TableView({ reports }: { reports: FetchedReport[] }) {
  return (
    <div className="my-10">
      <RenderTable
        data={reports}
        columns={REPORT_DATA_COLUMNS}
        getRowId={({ secretKey }) => secretKey}
        getRowActions={({ secretKey }) => [
          {
            label: "Actions",
            items: [
              {
                title: "View report",
                link: `/secure/app/admin/dashboard/reports/${secretKey}`,
                isCursorPointer: true,
              },
            ],
          },
        ]}
        caption={`All Uploaded Reports (${reports.length})`}
      />
    </div>
  );
}
