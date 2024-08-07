import { getDateInTimeZone } from "@/utils/date";
import { EMPTY_FIELD } from "@/utils/misc";

const REPORT_DATA_COLUMNS: TableColumn<FetchedReport>[] = [
  { name: "Secret Key", data: ({ secretKey }) => secretKey },
  { name: "Subject", data: ({ subject }) => subject },
  {
    name: "Date of Submission",
    data: ({ date_of_submission }) => getDateInTimeZone(date_of_submission),
  },
  {
    name: "Date of Incident",
    data: ({ date_of_incident }) => getDateInTimeZone(date_of_incident),
  },
  {
    name: "Location",
    data: ({ location }) =>
      !location || location === EMPTY_FIELD ? "Unavailable" : location,
  },
  {
    name: "Attachments",
    data: ({ attachments }) => attachments.length,
  },
];

export { REPORT_DATA_COLUMNS };
