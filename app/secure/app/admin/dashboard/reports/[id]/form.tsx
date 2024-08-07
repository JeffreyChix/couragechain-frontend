"use client";

import { useForm, Controller, FormProvider } from "react-hook-form";

import Editor from "@/components/ui/form/editor";
import FormSelect from "@/components/ui/form/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { NEW_UPDATE_SCHEMA, NewUpdateSchemaType } from "@/schemas/update";
import Button from "@/components/ui/form/button";
import { HandleSubmitFunc } from "@/hooks/useSubmit";

export default function UpdateForm({
  id,
  submitHandler,
  isSubmitting,
}: {
  id: string;
  isSubmitting: boolean;
  submitHandler: HandleSubmitFunc<NewUpdateSchemaType>;
}) {
  const form = useForm({
    resolver: yupResolver(NEW_UPDATE_SCHEMA),
    defaultValues: {
      content: "",
      reportSecretKey: id,
    },
  });

  const onSubmit = (values: NewReportUpdate) =>
    submitHandler(values, {
      resetHookForm: form.reset,
    });

  return (
    <div className="">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="max-w-md mx-auto">
            <Controller
              name="status"
              render={({ field, fieldState }) => (
                <FormSelect
                  label="Status"
                  placeholder="Select status"
                  options={[
                    { name: "In review", value: "in-review" },
                    { name: "Investigating", value: "investigating" },
                    { name: "Resolved", value: "resolved" },
                  ]}
                  {...field}
                  isInvalid={!!fieldState.error?.message}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <Controller
            name="content"
            render={({ field, fieldState }) => (
              <Editor
                label="New update on the report"
                isInvalid={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                placeholder="New update on the report!"
                {...field}
              />
            )}
          />

          <div className="grid place-items-center mb-5">
            <Button loading={isSubmitting}>Submit</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
