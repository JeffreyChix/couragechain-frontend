import { client } from "./client";

const REPORT_SERVICE = {
  MAKE_NEW_REPORT(payload: FormData) {
    return client.post("/report/new", payload).then(({ data }) => data.data);
  },

  GET_REPORT_UPDATES(secretKey: string) {
    return client
      .get(`/report/update/all/${secretKey}`)
      .then(({ data }) => data.data);
  },
};

export { REPORT_SERVICE };
