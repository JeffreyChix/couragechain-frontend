import { HTMLInputTypeAttribute, forwardRef } from "react";
import { BsInfoCircle as InfoIcon } from "react-icons/bs";

import InputContainer from "./container";

export interface InputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: any;
  name?: string;
  isInvalid?: boolean;
  helperText?: string;
  disabled?: boolean;
  desc?: string;
  validation?: {
    required?: boolean;
  };
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, desc, helperText, isInvalid, validation, ...otherProps } =
    props;

  return (
    <InputContainer title={label} desc={desc} isRequired={validation?.required}>
      <input
        className={`form-input w-full text-lg ${
          isInvalid && "form-input-invalid"
        }`}
        {...otherProps}
        ref={ref}
      />

      {helperText && (
        <div className="flex items-center gap-x-2 text-red-700 mt-2">
          <InfoIcon className="text-base" />
          <span className="text-xs">{helperText}</span>
        </div>
      )}
    </InputContainer>
  );
});

Input.displayName = "Input";

export default Input;
