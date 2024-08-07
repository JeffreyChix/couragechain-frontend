import { InferType } from "yup";

import { stripHTMLTags } from "@/utils/html";
import { yup } from ".";

const ALLOWED_STATUS: ReportStatus[] = [
  "in-review",
  "investigating",
  "resolved",
];

const NEW_UPDATE_SCHEMA = yup.object().shape({
  status: yup.string().oneOf(ALLOWED_STATUS).required("Select a status!"),
  content: yup
    .string()
    .required("Description can't be empty!")
    .test("isNotEmpty", "Enter at least 20 characters!", (val) => {
      const strippedValue = stripHTMLTags(val);
      if (strippedValue.length >= 0 && strippedValue.length <= 20) {
        return false;
      }
      return true;
    }),
  reportSecretKey: yup.string().required("Secret key is missing!"),
});

export type NewUpdateSchemaType = InferType<typeof NEW_UPDATE_SCHEMA>;

export { NEW_UPDATE_SCHEMA };
