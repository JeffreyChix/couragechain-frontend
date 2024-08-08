import type { Metadata } from "next";
import { Suspense } from "react";

import RenderTabs from "@/components/render-tabs";
import BoardView from "./board";
import TableView from "./table";
import { REPORT_SERVICE } from "@/services/report";
import Loading from "@/components/loading";

export const runtime = 'edge';

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
      <div className="mb-5">
        <div className="flex flex-col gap-y-2 border-b pb-5">
          <h1 className="text-2xl">All Reports</h1>
          <p>Updated every 30 minutes.</p>
        </div>
      </div>

      <Suspense
        fallback={<Loading loading loadingMessage="Just a second..." />}
      >
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
      </Suspense>
    </div>
  );
}
