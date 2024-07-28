"use client";

import { useForm, FormProvider, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/ui/form/input";
import Editor from "@/components/ui/form/editor";
import FileInput from "@/components/ui/form/file";
import Divider from "@/components/divider";
import Button from "@/components/ui/form/button";
import { REPORT_SCHEMA } from "@/schemas/report";

export default function NewReportForm() {
  const form = useForm({
    resolver: yupResolver(REPORT_SCHEMA),
    mode: "onTouched",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = (values: BasicReportData) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === "supportingDocuments" && typeof value !== "string") {
        value.forEach((doc) =>
          formData.append(`supportingDocuments[]`, doc.file)
        );
      } else {
        formData.append(key, value as string);
      }
    });

    setTimeout(() => {
      toast.success("Report Uploaded!");
    }, 1000);
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
            placeholder="Do you remember when it happened"
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
            name="supportingDocuments"
            render={({ field, fieldState }) => (
              <FileInput
                label="Supporting documents"
                placeholder="Upload supporting documents"
                desc="You can upload up to 10 files, each no larger than 10 MB. Please upload any files that would aid the authorities in investigating this report."
                {...field}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <div className="grid place-items-center">
            <Button className="max-sm:w-full" type="submit">
              Submit Report
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
