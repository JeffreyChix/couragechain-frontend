import { forwardRef } from "react";
import clsx from "clsx";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputContainer from "./container";

interface FormSelectProps {
  value?: string;
  onChange?: (val: string) => void;
  options?: { name: string; value: string }[];
  placeholder: string;
  className?: string;
  label: string;
  isInvalid?: boolean;
  helperText?: string;
}

const FormSelect = forwardRef<HTMLButtonElement, FormSelectProps>(
  (props, ref) => {
    const {
      className,
      options,
      placeholder,
      label,
      isInvalid,
      helperText,
      onChange,
      ...otherProps
    } = props;

    return (
      <InputContainer title={label}>
        <Select {...otherProps} onValueChange={(val) => onChange?.(val)}>
            <SelectTrigger
              ref={ref}
              className={clsx(
                "ring-0 outline-none outline-0",
                className,
                isInvalid && "form-input form-input-invalid"
              )}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          <SelectContent>
            {options?.map((opt, index) => (
              <SelectItem key={index} value={opt.value}>
                {opt.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </InputContainer>
    );
  }
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
