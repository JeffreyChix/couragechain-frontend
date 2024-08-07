type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
};

type Step = {
  id: number;
  title: string;
  desc: string;
};

type Faq = {
  title: string;
  text: string;
  active?: boolean;
};

type FileState = {
  file: File;
  key: string; // used to identify the file in the progress callback
  progress: "PENDING" | "COMPLETE" | "ERROR" | number;
  abortController?: AbortController;
};

type BasicReportData = {
  subject?: string;
  dateOfIncident?: string;
  location?: string;
  description?: string;
  supportDocuments?: FileState[];
};

type ReportUpdate = {
  report_secret_key: string;
  status: ReportStatus;
  date_of_submission: string;
  content: string;
};

type NewReportUpdate = {
  reportSecretKey: string;
  status: ReportStatus;
  content: string;
};

type ReportStatus = "submitted" | "in-review" | "investigating" | "resolved";

type MenuItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

type Tab = {
  title: string;
  value: string;
  body: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

type FetchedAttachment = { mimetype: string; filename: string; buffer: string };

type FetchedReport = {
  subject: string;
  date_of_submission: string;
  location: string;
  date_of_incident: string;
  secretKey: string;
  description: string;
  attachments: Array<FetchedAttachment>;
};

type TableColumn<T> = {
  name: string;
  data: React.ReactNode | ((row: T) => React.ReactNode);
  className?: string;
  show?: boolean;
};

type DropdownMenuItem = {
  title: string;
  link?: string;
  icon?: React.ReactNode;
  className?: string;
  isCursorPointer?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  withSeparator?: boolean;
};

type DropdownMenu = {
  label?: string;
  items?: DropdownMenuItem[];
};
