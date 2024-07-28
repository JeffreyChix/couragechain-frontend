import { forwardRef } from "react";

import InputContainer from "./container";
import { EditorProps } from "./editor";
import MultiFileDropzone from "@/components/file-dropzone";
import { ALLOWED_MIME_TYPES, ONE_MB_IN_BYTES } from "@/utils/file";

const FileInput = forwardRef<HTMLInputElement, EditorProps>((props, ref) => {
  const { label, desc, value, onChange } = props;


  return (
    <InputContainer title={label} desc={desc}>
      <MultiFileDropzone
        ref={ref}
        value={value as unknown as FileState[]}
        onChange={(files) => {
          onChange(files);
        }}
        dropzoneOptions={{
          maxFiles: 10,
          maxSize: 10 * ONE_MB_IN_BYTES,
          accept: ALLOWED_MIME_TYPES,
        }}
      />
    </InputContainer>
  );
});

FileInput.displayName = "FileInput";

export default FileInput;
