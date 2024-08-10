import { Suspense } from "react";

import RenderTabs from "@/components/render-tabs";
import FolderView from "./folder";
import TableView from "./table";
import { REPORT_SERVICE } from "@/services/report";
import Loading from "@/components/loading";

export const metadata = {
  title: "All Reports - Echo",
  description: "All reports on Echo.",
};

export default async function Reports() {
  const reportsInfo = await REPORT_SERVICE.GET_ALL_REPORTS_INFO();

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
          defaultValue="folder"
          tabs={[
            {
              title: "Folder",
              value: "folder",
              body: <FolderView reportsInfo={reportsInfo} />,
            },
            {
              title: "Table",
              value: "table",
              body: <TableView reportsInfo={reportsInfo} />,
            },
          ]}
        />
      </Suspense>
    </div>
  );
}
