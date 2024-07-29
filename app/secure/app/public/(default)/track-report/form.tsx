"use client";

import UncontrolledInput from "@/components/ui/form/uncontrolled-input";

export default function SecretKeyForm({
  onSubmitKey,
}: {
  onSubmitKey: (val: string) => void;
}) {

  return (
    <div>
      <UncontrolledInput
        label="Secret key"
        type="text"
        placeholder="Please enter the 20-character secret key."
        desc="Hit 'Enter' to submit"
        defaultValue=""
        onSubmit={onSubmitKey}
        validation={{ length: 20 }}
      />
    </div>
  );
}
