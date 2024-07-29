import {
  ChangeEvent,
  KeyboardEvent,
  forwardRef,
  useState,
} from "react";
import { BsInfoCircle as InfoIcon } from "react-icons/bs";

import InputContainer from "./container";
import { InputProps } from "./input";

type UncontrolledInputProps = Omit<
  InputProps,
  "value" | "defaultValue" | "validation"
> & {
  defaultValue: string;
  validation?: {
    required?: boolean;
    length?: number;
  };
  onSubmit?: (val: string) => void;
};

const UncontrolledInput = forwardRef<HTMLInputElement, UncontrolledInputProps>(
  (props, ref) => {
    let {
      label,
      desc,
      helperText,
      isInvalid,
      validation,
      defaultValue,
      onSubmit,
      onChange,
      ...otherProps
    } = props;

    const [internalValue, setInternalValue] = useState(defaultValue);
    const [customError, setCustomError] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      setCustomError("");
    };

    const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
      const { key, target } = e;
      const { value } = target as any;

      if (key !== "Enter") return;

      const trimmedValue = value?.trim();
      const expectedLength = validation?.length;

      if (
        expectedLength !== undefined &&
        trimmedValue?.length > 0 &&
        trimmedValue?.length !== expectedLength
      ) {
        setCustomError(`${expectedLength} characters expected!`);
        return;
      }

      onSubmit?.(trimmedValue);
    };

    isInvalid = isInvalid || !!customError;
    helperText = helperText || customError;

    return (
      <InputContainer
        title={label}
        desc={desc}
        isRequired={validation?.required}
      >
        <input
          className={`form-input w-full text-lg ${
            isInvalid && "form-input-invalid"
          }`}
          onChange={handleChange}
          onKeyUp={handleSubmit}
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
  }
);

UncontrolledInput.displayName = "UncontrolledInput";

export default UncontrolledInput;
