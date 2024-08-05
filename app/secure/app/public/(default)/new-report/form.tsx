"use client";

import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/ui/form/input";
import Editor from "@/components/ui/form/editor";
import FileInput from "@/components/ui/form/file";
import Divider from "@/components/divider";
import Button from "@/components/ui/form/button";
import { REPORT_SCHEMA, ReportSchemaType } from "@/schemas/report";
import { HandleSubmitFunc } from "@/hooks/useSubmit";

interface NewReportFormProps {
  submitHandler: HandleSubmitFunc<ReportSchemaType>;
  isSubmitting: boolean;
}

export default function NewReportForm({
  submitHandler,
  isSubmitting,
}: NewReportFormProps) {
  const form = useForm({
    resolver: yupResolver(REPORT_SCHEMA),
    mode: "onTouched",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = form;

  const onSubmit = (values: BasicReportData) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === "attachments" && typeof value !== "string") {
        value.forEach((doc) =>
          formData.append(`attachments`, doc.file)
        );
      } else {
        formData.append(key, value as string);
      }
    });

    submitHandler(formData as unknown as ReportSchemaType, {
      resetHookForm: reset,
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Subject"
            type="text"
            placeholder="Enter a subject line"
            desc="Please provide a subject for your report. It doesn't have to be long."
            validation={{ required: true }}
            {...register("subject")}
            isInvalid={!!errors?.subject?.message}
            helperText={errors?.subject?.message}
          />

          <Input
            label="Date of incident"
            type="datetime-local"
            placeholder="Do you remember when it happened?"
            validation={{ required: true }}
            {...register("dateOfIncident")}
            isInvalid={!!errors?.dateOfIncident?.message}
            helperText={errors?.dateOfIncident?.message}
          />

          <Input
            label="Location"
            type="text"
            placeholder="Tell us where"
            {...register("location")}
            isInvalid={!!errors?.location?.message}
            helperText={errors?.location?.message}
          />

          <Controller
            name="description"
            render={({ field, fieldState }) => (
              <Editor
                label="Describe the incident"
                placeholder="On the 19th of August..."
                validation={{ required: true }}
                {...field}
                isInvalid={fieldState.invalid}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Divider>Upload documents</Divider>

          <Controller
            name="attachments"
            render={({ field, fieldState }) => (
              <FileInput
                label="Attachments"
                placeholder="Upload supporting documents"
                desc="You can upload up to 10 files, each no larger than 10 MB. Please upload any files that would aid the authorities in investigating this report."
                {...field}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <div className="grid place-items-center">
            <Button
              loading={isSubmitting}
              className="max-sm:w-full"
              type="submit"
            >
              Submit Report
            </Button>
            <div
              className={`text-xs text-gray-400 mt-1 ${
                isSubmitting ? "visible" : "invisible"
              }`}
            >
              <span>Please wait...</span>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
