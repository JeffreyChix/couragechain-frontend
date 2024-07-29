import { yup } from ".";
import { stripHTMLTags } from "@/utils/html";

const REPORT_SCHEMA = yup.object().shape({
  subject: yup
    .string()
    .min(10, "At least 10 characters!")
    .max(255, "Maximum of 255 characters!")
    .required("Subject is required!"),
  dateOfIncident: yup.string(),
  location: yup.string().when({
    is: (val: string) => val.length > 0,
    then: (schema) => schema.min(10, "At least 10 characters!"),
    otherwise: (schema) => schema.notRequired(),
  }),
  description: yup
    .string()
    .required("Description can't be empty!")
    .test("isNotEmpty", "Enter at least 20 characters!", (val) => {
      const strippedValue = stripHTMLTags(val);
      if (strippedValue.length >= 0 && strippedValue.length <= 20) {
        return false;
      }
      return true;
    }),
  supportingDocuments: yup.mixed(),
});

export { REPORT_SCHEMA };
