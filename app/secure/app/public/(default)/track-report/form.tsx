"use client";

import UncontrolledInput from "@/components/ui/form/uncontrolled-input";

export default function SecretKeyForm({
  defaultValue,
  onSubmitKey,
}: {
  defaultValue: string;
  onSubmitKey: (val: string) => void;
}) {
  return (
    <div>
      <UncontrolledInput
        label="Secret key"
        type="text"
        placeholder="Please enter the 24-character secret key."
        desc="Hit 'Enter' to submit"
        defaultValue={defaultValue}
        onSubmit={onSubmitKey}
        validation={{ length: 24 }}
      />
    </div>
  );
}
