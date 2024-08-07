"use client";

import { useState } from "react";

import FileTypeIcon from "./file-type-icons";
import Loading from "@/components/loading";
import { shorten } from "@/utils/string";
import RenderDialog from "@/components/render-dialog";

const supportedOfficeExtensions = [
  "xls",
  "xlsx",
  "doc",
  "docx",
  "ppt",
  "pptx",
  "txt",
];

interface FilePreviewProps {
  attachment: FetchedAttachment;
  onActive?: (val: FetchedAttachment) => void;
}

export default function FilePreview({ attachment }: FilePreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="flex items-center px-3 py-3 gap-2 cursor-pointer transition-all duration-200 ease-in hover:scale-105 hover:from-white/90 hover:to-white/70 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg shadow shadow-black/5"
      >
        <FileTypeIcon
          className="shrink-0 h-15 w-15"
          type={attachment.filename.split(".").pop()}
        />
        <p>{shorten(attachment.filename, 40)}</p>
      </button>
      <RenderDialog
        open={open}
        onOpenChange={() => setOpen(false)}
        isFullScreen
        configure={{
          fullScreen: { title: shorten(attachment.filename, 100) },
        }}
      >
        <Preview attachment={attachment} />
      </RenderDialog>
    </>
  );
}

const Preview = ({ attachment }: { attachment: FetchedAttachment | null }) => {
  const [loading, setLoading] = useState(true);

  if (!attachment) return null;

  const { filename, mimetype, buffer } = attachment;
  const extension = filename.split(".").pop();
  const href = `data:${mimetype};base64,${buffer}`;

  const getPreviewLink = () => {
    return supportedOfficeExtensions.includes(extension as string)
      ? `https://view.officeapps.live.com/op/embed.aspx?src=${href}`
      : href;
  };

  return (
    <div className="h-full">
      <Loading loading={loading} loadingMessage="Loading file..." />
      <div className="overflow-auto h-full">
        <iframe
          src={getPreviewLink()}
          width="100%"
          height="100%"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};
