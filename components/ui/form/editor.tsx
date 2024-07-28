import { forwardRef } from "react";
import { BsInfoCircle as InfoIcon } from "react-icons/bs";
import dynamic from "next/dynamic";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

import InputContainer from "./container";
import { InputProps } from "./input";

export type EditorProps = Omit<InputProps, "defaultValue" | "type">;

const Editor = forwardRef<typeof QuillEditor, EditorProps>((props, ref) => {
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "align",
    "color",
    "code-block",
  ];

  let { label, desc, placeholder, helperText, isInvalid, validation, onChange, value } =
    props;

  return (
    <InputContainer title={label} desc={desc} isRequired={validation?.required}>
      <div className="pb-10 max-sm:pb-16">
        <QuillEditor
          theme="snow"
          value={value}
          onChange={onChange}
          modules={quillModules}
          formats={quillFormats}
          placeholder={placeholder}
          className={`h-[350px] ${isInvalid && "editor-invalid"}`}
        />
      </div>

      {helperText && (
        <div className="flex items-center gap-x-2 text-red-700 mt-2">
          <InfoIcon className="text-base" />
          <span className="text-xs">{helperText}</span>
        </div>
      )}
    </InputContainer>
  );
});

Editor.displayName = "Editor";

export default Editor;
