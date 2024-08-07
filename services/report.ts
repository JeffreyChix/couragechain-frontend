import { client, BASE_URL } from "./client";

const REPORT_SERVICE = {
  MAKE_NEW_REPORT(payload: FormData) {
    return client.post("/report/new", payload).then(({ data }) => data.data);
  },

  GET_REPORT_UPDATES(secretKey: string) {
    return client
      .get(`/report/update/all/${secretKey}`)
      .then(({ data }) => data.data);
  },

  GET_ALL_REPORT_KEYS() {
    return client
      .get("/report/all-keys")
      .then(({ data }) => data.data as string[]);
  },

  async GET_ALL_REPORTS() {
    const response = await fetch(`${BASE_URL}/report/all`, {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch reports!");
    }

    const data = await response.json();

    return data.data as FetchedReport[];
  },

  async GET_REPORT(secretKey: string) {
    const response = await fetch(`${BASE_URL}/report/${secretKey}`);

    if (!response.ok) {
      throw new Error("Failed to fetch report!");
    }

    const data = await response.json();

    return data.data as FetchedReport;
  },

  NEW_REPORT_UPDATE(payload: {
    secretKey: string;
    content: string;
    status: ReportStatus;
  }) {
    return client
      .post("/report/update/new", payload)
      .then(({ data }) => data.data);
  },
};

export { REPORT_SERVICE };
