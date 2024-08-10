import { getDateInTimeZone } from "@/utils/date";

const REPORT_DATA_COLUMNS: TableColumn<FetchedReportInfo>[] = [
  { name: "Secret Key", data: ({ secretKey }) => secretKey },
  { name: "Subject", data: ({ subject }) => subject },
  {
    name: "Date of Submission",
    data: ({ date_of_submission }) => getDateInTimeZone(date_of_submission),
  },
  {
    name: "Attachments",
    data: ({ attachmentLength }) => attachmentLength,
  },
];

export { REPORT_DATA_COLUMNS };
