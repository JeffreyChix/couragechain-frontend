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
