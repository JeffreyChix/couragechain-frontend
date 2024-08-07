import type { Metadata } from "next";

import RenderTabs from "@/components/render-tabs";
import BoardView from "./board";
import TableView from "./table";
import { REPORT_SERVICE } from "@/services/report";

export function generateMetadata(): Metadata {
  return {
    title: "All Reports - Echo",
    description: "All reports on Echo.",
  };
}

export default async function Reports() {
  const reports = await REPORT_SERVICE.GET_ALL_REPORTS();

  return (
    <div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <GradientBox>
          <div className="py-4 px-4">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl">All Reports</h1>
              <p>
                Discover all reports submitted on Echo. New reports are updated
                every 30 minutes. You can work with two views: the board view
                and the table view. Select the one that suits you best and get
                started. Thank you for using Echo!
              </p>
            </div>
          </div>
        </GradientBox>
        <GradientBox>
          <div className="py-4 px-4">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl">All Reports</h1>
              <p>
                Discover all reports submitted on Echo. New reports are updated
                every 30 minutes. You can work with two views: the board view
                and the table view. Select the one that suits you best and get
                started. Thank you for using Echo!
              </p>
            </div>
          </div>
        </GradientBox>
      </div> */}

      <RenderTabs
        defaultValue="board"
        tabs={[
          {
            title: "Board",
            value: "board",
            body: <BoardView reports={reports} />,
          },
          {
            title: "Table",
            value: "table",
            body: <TableView reports={reports} />,
          },
        ]}
      />
    </div>
  );
}
